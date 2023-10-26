import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent {

  constructor( private fb:FormBuilder){}

  usuariosForm = this.fb.group({
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    email: [null,Validators.required ],
    username: [null,Validators.required ],
    password:[null, Validators.required],
  })

  onSubmit(): void{
    swal.fire(
      'Envio satisfactorio!',
      'Guardado',
      'success'
    )
  }
}
