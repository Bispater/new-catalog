import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-specs-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specs-popup.component.html',
  styleUrl: './specs-popup.component.scss'
})
export class SpecsPopupComponent {
  public specs = [
    {
      img: 'https://r.btcdn.co/11643/original/783125-motor-turbo-115hp-torque-160nm.png',
      text: 'Motor Turbo 116 CV Torque 160 NM*'
    },
    {
      img: 'https://r.btcdn.co/11643/original/783123-maletero-500-l.png',
      text: 'Maletero de 500L'
    },
    {
      img: 'https://r.btcdn.co/11643/original/783124-maxima-calificacion-latinNcap.png',
      text: '5 estrellas en LatinNCAP'
    },
    {
      img: 'https://r.btcdn.co/11643/original/783126-6-airbgas.png',
      text: '6 Airbags'
    }
  ];
}
