import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BottomMenuComponent } from "../../components/bottom-menu/bottom-menu.component";
import { Listeners } from '../../utils/listeners';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, BottomMenuComponent, MatIcon],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  car: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listener : Listeners
  ) {}

  ngOnInit() {
    this.listener.events(this);
    this.route.paramMap.subscribe(params => {
      const carName = params.get('name');
      this.car = history.state.car; 
      console.log("this car ?", this.car)
    });
  }
  
  navigateToHome(): void {
    this.router.navigate(['/collections']);
  }
}
