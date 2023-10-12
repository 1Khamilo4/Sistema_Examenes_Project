import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.css']
})
export class FormCategoriasComponent {

  constructor( private fb: FormBuilder){

  }

  categoriasForm = this.fb.group({/**Grupo de formulario */
      titulo: ["", Validators.required],
      descripcion: ["", Validators.compose([Validators.required, Validators.maxLength(150), Validators.minLength(50) ])]  
  })

  onSubmit(): void{
    swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
}
