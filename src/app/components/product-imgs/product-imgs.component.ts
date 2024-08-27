import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../../services/dataService';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-imgs.component.html',
  styleUrl: './product-imgs.component.scss',
})
export class ProductImgsComponent implements OnInit {
  autos: Auto[] = [];
  car: any;

  constructor(
    private carDataService: CarDataService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.car = this.carDataService.getCarData();
    if (!this.car) {
      console.log("this img-car ? ", this.car);

      this.http
        .get<{ autos: Auto[] }>('assets/carDetail.json')
        .subscribe((data) => {
          this.autos = data.autos;
        });
        this.car = this.autos;
        console.log("this autos? ", this.autos);
    }
    console.log('Car data in CarImagesComponent: ', this.car);
  }
}
