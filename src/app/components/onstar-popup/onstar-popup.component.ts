import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-onstar-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onstar-popup.component.html',
  styleUrl: './onstar-popup.component.scss'
})
export class OnstarPopupComponent {
  showPopup: boolean = true;

  openPopup() {
    console.log("show pop up ")
    this.showPopup = true;
  }

  closePopup(event: Event) {
    event.preventDefault();
    this.showPopup = false;
  }
}
