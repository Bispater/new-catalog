import { Component } from '@angular/core';
import { CarService } from '../../services/dataService'; // Cambia la ruta de acuerdo a tu estructura
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms'; // Para usar ngModel

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {
  displayedColumns: string[] = ['name', 'price', 'edit'];
  electrics: any[] = []; // Guardar los autos
  autos: any[] = [];
  pickups: any[] = [];
  suvs: any[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.loadData();
    console.log("admin starting..")
  }

  loadData() {
    // Obtiene los datos desde el servicio (ajusta esto según tu JSON)
    this.carService.getCars().subscribe((data) => {
      const categories = data;
      this.electrics = categories.electrics; // O ajusta para tu categoría específica
      this.autos = categories.autos;
      this.pickups = categories.pickups;
      this.suvs = categories.suvs;

      console.log("data from admin", data);
    });
  }

  // updatePrice(carId: number, newPrice: number) {
  //   console.log("calling update service", carId, newPrice);
  //   // Llamar al servicio para actualizar el precio
  //   this.carService.updateCarPrice(carId, newPrice).subscribe((response) => {
  //     console.log('Precio actualizado', response);
  //     this.loadData(); // Recargar los datos después de la actualización
  //   });
  // }
}
