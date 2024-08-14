import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OnstarPopupComponent } from '../../components/onstar-popup/onstar-popup.component';

@Component({
  selector: 'app-onstar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule, OnstarPopupComponent],
  templateUrl: './onstar.component.html',
  styleUrl: './onstar.component.scss',
})
export class OnstarComponent {

  
  isVideoOpen = false;

  constructor(public dialog: MatDialog) { }

  openVideo() {
    this.isVideoOpen = true;
  }

  closeVideo() {
    this.isVideoOpen = false;
  }

  openPopup(): void {
    this.dialog.open(OnstarPopupComponent, {
    });
  }
}
