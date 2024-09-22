import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarDataService } from '../../services/carService';

@Component({
  selector: 'app-specs-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specs-popup.component.html',
  styleUrl: './specs-popup.component.scss'
})
export class SpecsPopupComponent {
  car: any;

  constructor(private carDataService: CarDataService) { }

  ngOnInit(): void {
    this.car = this.carDataService.getCar();
  }

}
