import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarDataService {
  private selectedCar: any;

  setCar(car: any) {
    this.selectedCar = car;
  }

  getCar() {
    return this.selectedCar;
  }
}
