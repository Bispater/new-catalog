import { Component } from '@angular/core';
import { CarDataService } from '../../services/carService';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-compare-product',
  standalone: true,
  imports: [],
  templateUrl: './compare-product.component.html',
  styleUrl: './compare-product.component.scss',
})
export class CompareProductComponent {
  file: SafeResourceUrl | undefined;

  activeColorIndex = 0;
  car: any;

  constructor(
    private carDataService: CarDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.car = this.carDataService.getCar();
    console.log('this car', this.car);
    this.file = this.car.compare_iframe;

    if (this.car && this.car.compare_iframe) {
      this.file = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.car.compare_iframe
      );
    }
  }
}
