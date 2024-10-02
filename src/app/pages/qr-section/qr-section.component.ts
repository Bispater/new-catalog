import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-section',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './qr-section.component.html',
  styleUrl: './qr-section.component.scss',
})
export class QrSectionComponent {
  public myAngularxQrCode: string;

  constructor() {
    const subsidiaryId = localStorage.getItem('subsidiary_id');
    const subsidiaryName = localStorage.getItem('subsidiary_name');
    
    if (subsidiaryId && subsidiaryName) {
      this.myAngularxQrCode = `https://catalog-970d7.web.app/home?subsidiary_id=${subsidiaryId}&subsidiary_name=${subsidiaryName}&origin=qr`;
    } else {
      this.myAngularxQrCode = 'https://catalog-970d7.web.app/home?subsidiary_id=0&subsidiary_name=browserStore&origin=qr';
    }
  }

}
