import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-examenes',
  templateUrl: './form-examenes.component.html',
  styleUrls: ['./form-examenes.component.css']
})
export class FormExamenesComponent {

  constructor(private fb:FormBuilder){}

  examenesForm = this.fb.group({

    titulo : ["", Validators.required, Validators.compose( [Validators.minLength(5), Validators.maxLength(50)])],
    descripcion : [null, Validators.required,Validators.compose( [Validators.minLength(10), Validators.maxLength(150)])],
    puntosMaximos : [null, Validators.required],
    numeroDePeguntas : [null, Validators.required]

  })

  onSubmit(){
    if(this.examenesForm.valid){
      Swal.fire(
        'Envio satisfactorio!',
        'Guardado',
        'success'
      )

    }else{
      Swal.fire(
        'No se guardaron los datos!',
        'Error',
        'error'
      )
    }
  }
  
}
