import { Component } from '@angular/core';
import { CarDataService } from '../../services/carService';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technical-sheet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technical-sheet.component.html',
  styleUrls: ['./technical-sheet.component.scss']
})
export class TechnicalSheetComponent {
  file: SafeResourceUrl | undefined;
  car: any;

  constructor(
    private carDataService: CarDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.car = this.carDataService.getCar();
    console.log('this car', this.car);

    if (this.car && this.car.files) {
      const googleViewerUrl = `https://fv-viewer.web.app/?url=${this.car.files}`;

      this.file = this.sanitizer.bypassSecurityTrustResourceUrl(googleViewerUrl);
      console.log("iframe pdf ", this.file);
    }
  }
}
