import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { QrPopupComponent } from '../qr-popup/qr-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { CarDataService } from '../../services/dataService';
import { SpecsPopupComponent } from '../specs-popup/specs-popup.component';
import { TechnicalPopupComponent } from '../technical-popup/technical-popup.component';

@Component({
  selector: 'app-bottom-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.scss'
})
export class BottomMenuComponent implements OnInit {

  @Input() car: any; 

  // car: any;

  constructor (
    private router: Router,
    public dialog: MatDialog,
    private carDataService: CarDataService
  ) {}

  ngOnInit() {
    console.log("data from bootom menu : ", this.car);
    this.carDataService.setCarData(this.car);  
  }

  navigateTo(route: string) {
    console.log("navigation to ", route);
    console.log("and data ", this.car);
    this.router.navigate([`/${route}`], { state: { data: this.car } });
  }

  openPopup(): void {
    this.dialog.open(QrPopupComponent, {
    });
  }

  // openPopupEspecify() {
  //   this.dialog.open(SpecsPopupComponent, {
  //   });
  // }

  openPopupEspecify() {
    this.dialog.open(SpecsPopupComponent, {
      width: '80%', // Ajusta el ancho del popup
      height: 'auto', // Ajusta la altura del popup (puedes especificar un valor fijo si prefieres)
      panelClass: 'custom-dialog-container' // Clase personalizada para el panel del popup
    });
  }
  


  openTechnicalSheetPopup() {
    this.dialog.open(TechnicalPopupComponent, {
    });
  }
  



}
