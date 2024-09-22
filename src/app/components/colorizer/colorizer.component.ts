import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CarService } from '../../services/dataService';
import { CarDataService } from '../../services/carService';
import { Listeners } from '../../utils/listeners';

@Component({
  selector: 'app-colorizer',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './colorizer.component.html',
  styleUrl: './colorizer.component.scss',
})
export class ColorizerComponent implements OnInit {
  activeColorIndex = 0;
  car: any;
  colors: any;
  selectedColor: any;
  nameOfSelectedColor: any;
  is_color: boolean = true;

  constructor(
    private router: Router, 
    private carDataService: CarDataService,
    private listener: Listeners,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    // this.listener.events(this);
    this.car = this.carDataService.getCar();
    // console.log('this car', this.car);
    if (this.car) {
      this.colors = this.car.colors;
      if (!this.colors) {
        this.is_color = false;
      } else {
        this.selectedColor = this.colors[0];
        this.nameOfSelectedColor = this.colors[0].color;
      }
    } else {
      this.is_color = false;
    }
  }

  changeColor(color: any) {
    const imgElement = document.querySelector('.car-image img');

    if (imgElement) {
      imgElement.classList.add('fade-out');

      setTimeout(() => {
        this.selectedColor = color;
        this.nameOfSelectedColor = color.color;
        imgElement.classList.remove('fade-out');
      }, 200);
    } else {
      console.error('El elemento img no se encontró.');
    }
  }
}
