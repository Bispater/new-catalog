import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BottomMenuComponent } from '../../components/bottom-menu/bottom-menu.component';
import { MatIcon } from '@angular/material/icon';
import { CarDataService } from '../../services/carService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, BottomMenuComponent, MatIcon],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  car: any;
  collection: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carDataService: CarDataService,
    private location: Location
  ) {}

  ngOnInit() {
    this.car = this.carDataService.getCar();
    this.carDataService.setCar(this.car);
    localStorage.setItem('selectedCar', JSON.stringify(this.car));
    this.route.queryParams.subscribe((params) => {
      this.collection = params['collection'];
    });
  }

  navigateBack(): void {
    this.location.back();
  }
}
