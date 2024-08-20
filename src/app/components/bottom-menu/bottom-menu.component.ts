import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QrPopupComponent } from '../qr-popup/qr-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bottom-menu',
  standalone: true,
  imports: [],
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.scss'
})
export class BottomMenuComponent {

  @Input() car: any; 

  // car: any;

  constructor (
    private router: Router,
    public dialog: MatDialog
  ) {}

  navigateTo(route: string) {
    console.log("navigation to ", route);
    console.log("and data ", this.car);
    this.router.navigate([`/${route}`], { state: { data: this.car } });
  }

  openPopup(): void {
    this.dialog.open(QrPopupComponent, {
    });
  }

}
