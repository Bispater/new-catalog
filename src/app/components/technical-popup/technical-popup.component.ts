import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-popup',
  standalone: true,
  imports: [],
  templateUrl: './technical-popup.component.html',
  styleUrl: './technical-popup.component.scss'
})
export class TechnicalPopupComponent {

  openPdf() {
    // window.open('https://r.btcdn.co/11643/original/927138-ft-onix-sedan.pdf?1707315735', '_blank');
  }
  
  

  openAnotherAction() {
    console.log('Another action');
  }

}
