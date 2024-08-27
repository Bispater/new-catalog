import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {
  private carData: any;

  setCarData(car: any) {
    this.carData = car;
  }

  getCarData() {
    return this.carData;
  }
}
