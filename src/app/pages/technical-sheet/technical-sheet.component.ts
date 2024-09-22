import { Component } from '@angular/core';
import { CarDataService } from '../../services/carService';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technical-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical-sheet.component.html',
  styleUrl: './technical-sheet.component.scss'
})


export class TechnicalSheetComponent {
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
    this.file = this.car.files;

    if (this.car && this.car.files) {
      this.file = this.sanitizer.bypassSecurityTrustResourceUrl(this.car.files);
    }

  }
}
