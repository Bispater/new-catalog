import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/dataService';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarDataService } from '../../services/carService';

interface Auto {
  name: string;
  image: string;
  price: string;
  images: Array<{ src: string; alt: string }>;
  colors?: Array<{ color: string; image: string }>;
}

@Component({
  selector: 'app-product-imgs',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './product-imgs.component.html',
  styleUrl: './product-imgs.component.scss',
})
export class ProductImgsComponent implements OnInit {
  autos: Auto[] = [];
  car: any;

  constructor(
    private http: HttpClient,
    private carDataService: CarDataService,
    private carService: CarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.car = this.carDataService.getCar();
    // console.log('this car ?', this.car);
    if (!this.car) {
      const storedCar = localStorage.getItem('selectedCar');
      if (storedCar) {
        this.car = JSON.parse(storedCar);
      } else {
        // Manejar la falta de datos o redirigir al usuario
        console.log('No car data found in localStorage');
      }
    }

    // this.car = history.state.car;
    // console.log("this car historyy", this.car);
    // if (!this.car) {
    //   console.log("this img-car ? ", this.car);

    // this.http
    //   .get<{ autos: Auto[] }>('assets/carDetail.json')
    //   .subscribe((data) => {
    //     this.autos = data.autos;
    //   });
    //   this.car = this.autos;
    //   console.log("this autos? ", this.autos);
  }
}
