import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { CarDataService } from '../../services/carService';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  sucursal: string = 'Kovacs'; 
  carName: string = ''; 
  car: any;

  constructor(
    private fb: FormBuilder,
    private carDataService: CarDataService,
    private snackBar: MatSnackBar
    ) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sucursal: [{ value: this.sucursal, disabled: true }],
      carName: [{ value: this.carName, disabled: true }]
    });
  }

  onSubmit() {
   
  }

  ngOnInit(): void {
    this.car = this.carDataService.getCar();
    this.carName = this.car.name;
  }


  sendForm(){
    if (this.contactForm.valid) {
      console.log('Formulario de Contacto Enviado', this.contactForm.value);

      this.snackBar.open('¡Formulario enviado con éxito, en breve te contactaremos!', 'Cerrar', {
        duration: 7000, 
        verticalPosition: 'top',
        horizontalPosition: 'center', 
        panelClass: ['snackbar-success']
      });

      this.contactForm.patchValue({
        nombre: '',
        telefono: '',
        email: ''
      });
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
      this.contactForm.updateValueAndValidity();
    } else {
      this.snackBar.open('Uno o más campos son incorrectos', 'Cerrar', {
        duration: 4000, 
        verticalPosition: 'top',
        horizontalPosition: 'center', 
        panelClass: ['snackbar-success']
      });
    }
  }
}
