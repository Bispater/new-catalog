import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Listeners } from '../../utils/listeners';
import { CarService } from '../../services/dataService';
import { CarDataService } from '../../services/carService';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule, MatCardModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
})
export class CollectionsComponent implements OnInit {
  title: string = '';
  selectedTabIndex: number = 0;
  tabs = ['autos', 'pick-ups-&-vans', 'suvs', 'electricos'];

  autos: any[] = [];
  pickups: any[] = [];
  suvs: any[] = [];
  electrics: any[] = [];
  currentCollection: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listener: Listeners,
    private carService: CarService,
    private carDataService: CarDataService
  ) {}

  ngOnInit(): void {
    this.listener.events(this);

    this.route.paramMap.subscribe((params) => {
      this.title = params.get('title') || '';
      this.setSelectedTab(this.title);
    });

    this.carService.getCars().subscribe((data) => {
      const categories = data.data;

      this.electrics = categories.electrics || [];
      this.suvs = categories.suvs || [];
      this.pickups = categories.pickups || [];
      this.autos = categories.autos || [];
    });
    this.updateCurrentCollection();
  }

  setSelectedTab(tab: string): void {
    const index = this.tabs.indexOf(tab);
    if (index !== -1) {
      this.selectedTabIndex = index;
    }
  }

  updateCurrentCollection(): void {
    const urlSegments = this.router.url.split('/');
    console.log("url ?", this.router.url)
    console.log("url segment",urlSegments)
    this.currentCollection = urlSegments[urlSegments.length - 1];
    console.log("current collection", this.currentCollection);
    this.setSelectedTab(this.currentCollection);
  }

  goToProduct(car: any) {
    this.carDataService.setCar(car);
    localStorage.setItem('selectedCar', JSON.stringify(car));
    const normalizedCarName = this.normalizeName(car.name);
    const collectionName = this.currentCollection;
    this.router.navigate(['/products', normalizedCarName], { queryParams: { collection: collectionName } });
  }

  normalizeName(name: string): string {
    return name
      .trim()  // Eliminar espacios al inicio y al final
      .toLowerCase()  // Convertir a minúsculas
      .replace(/\s+/g, '-')  // Reemplazar espacios con guiones
  }
  

  onTabChange(event: any): void {
    const tab = this.tabs[event.index];
    this.router.navigate(['/collections', tab]);
    console.log("tab?", tab);
    this.updateCurrentCollection();
  }
}
