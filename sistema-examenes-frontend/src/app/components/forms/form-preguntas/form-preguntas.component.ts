import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-preguntas',
  templateUrl: './form-preguntas.component.html',
  styleUrls: ['./form-preguntas.component.css']
})
export class FormPreguntasComponent {

  constructor(private fb:FormBuilder){}

  preguntasForm = this.fb.group({
    
    contenido : [null, Validators.required, Validators.compose([ Validators.maxLength(150) ]) ],
    opcion1 : [null, Validators.required, Validators.compose([ Validators.maxLength(170) ])],
    opcion2 : [null, Validators.required, Validators.compose([ Validators.maxLength(170) ])],
    opcion3 : [null, Validators.required, Validators.compose([ Validators.maxLength(170) ])],
    respuesta : [null, Validators.required, Validators.compose([ Validators.maxLength(170) ])]

  })

  onSubmit(){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
}
