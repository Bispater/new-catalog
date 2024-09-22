import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BottomMenuComponent } from "../../components/bottom-menu/bottom-menu.component";
import { Listeners } from '../../utils/listeners';
import { MatIcon } from '@angular/material/icon';
import { CarDataService } from '../../services/carService';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, BottomMenuComponent, MatIcon],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  car: any;
  collection: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listener : Listeners,
    private carDataService: CarDataService
  ) {}

  ngOnInit() {
    // this.listener.events(this);
    // this.route.paramMap.subscribe(params => {
    //   const carName = params.get('name');
    //   this.car = history.state.car; 
    //   console.log("this car ?", this.car)
    // });
    this.car = this.carDataService.getCar();
    this.carDataService.setCar(this.car);
    localStorage.setItem('selectedCar', JSON.stringify(this.car));
    // console.log("this car ? service", this.car);  
    this.route.queryParams.subscribe(params => {
      this.collection = params['collection'];
    });

  }
  
  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  navigateBack(): void {
    if(this.collection){
      this.router.navigate(['/collections', this.collection]);
    } else {
      this.router.navigate(['/collections/autos']);
    }
  }
}
