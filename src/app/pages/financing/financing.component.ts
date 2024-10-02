import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-financing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financing.component.html',
  styleUrl: './financing.component.scss',
})
export class FinancingComponent {

  isOpenPlans = false;
  isOpenInsurance = false;
  isOpenRenovations = false;

  openPlansPopup(): void {
    this.isOpenPlans = true;
  }

  openInsurancePopup(): void {
    this.isOpenInsurance = true;
  }

  openRenovationsPopup(): void {
    this.isOpenRenovations = true;
  }

  closePlansPopup(): void {
    this.isOpenPlans = false;
  }

  closeInsurancePopup(): void {
    this.isOpenInsurance = false;
  }

  closeRenovationsPopup(): void {
    this.isOpenRenovations = false;
  }
}
