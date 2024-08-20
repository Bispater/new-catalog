import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-colorizer',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './colorizer.component.html',
  styleUrl: './colorizer.component.scss'
})
export class ColorizerComponent implements OnInit {
  activeColorIndex = 0;
  productData: any;
  colors: any; 
  selectedColor : any;
  nameOfSelectedColor : any;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.productData = history.state.data; 
    this.colors = this.productData.colors;
    this.selectedColor = this.colors[0];
    this.nameOfSelectedColor = this.colors[0].color;
    console.log("coloirs", this.colors);
    console.log("product", this.productData); 
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
  
  

  navigateTo(route: string) {
    console.log("navigation to ", route);
    this.router.navigate([`/${route}`], { state: { data: this.productData } });
  }
}
