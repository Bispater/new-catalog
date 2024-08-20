import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BottomMenuComponent } from "../../components/bottom-menu/bottom-menu.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, BottomMenuComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  car: any;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const carName = params.get('name');
      this.car = history.state.car; 
      console.log("this car ?", this.car)
    });
  }
  
}
