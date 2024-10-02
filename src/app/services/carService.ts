import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarDataService {

  private selectedCar: any = null;
  private data: any = null;

  constructor() {
    // Obtener y verificar carData en localStorage
    try {
      const carData = localStorage.getItem('carData');
      this.data = carData ? JSON.parse(carData) : null;
    } catch (error) {
      console.error('Error parsing carData from localStorage:', error);
      this.data = null; // Asignar null si ocurre un error
    }

    // Obtener y verificar selectedCar en localStorage
    try {
      const selectedCar = localStorage.getItem('selectedCar');
      this.selectedCar = selectedCar ? JSON.parse(selectedCar) : null;
    } catch (error) {
      console.error('Error parsing selectedCar from localStorage:', error);
      this.selectedCar = null; // Asignar null si ocurre un error
    }
  }

  setCar(car: any) {
    this.selectedCar = car;
    localStorage.setItem('selectedCar', JSON.stringify(car));
  }

  getCar() {
    return this.selectedCar;
  }

  getAutos() {
    return this.data ? this.data.autos : [];
  }

  getCarByName(name: string) {
    return this.data ? this.data.autos.find((car: any) => car.name === name) : null;
  }
}
