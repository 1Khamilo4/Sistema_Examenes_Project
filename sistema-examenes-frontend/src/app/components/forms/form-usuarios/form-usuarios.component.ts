import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsuarioMV } from 'src/app/Models/usuario-mv';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit{

  constructor( private fb:FormBuilder, public formsService:FormsService, public api:RestService){

  }
  ngOnInit(): void {

    if(this.formsService.title === "Editar"){
        this.usuariosForm.setControl('nombre', new FormControl(this.formsService.usuario.nombre, Validators.required));
        this.usuariosForm.setControl('apellido', new FormControl(this.formsService.usuario.apellido, Validators.required));
        this.usuariosForm.setControl('email', new FormControl(this.formsService.usuario.email, Validators.required));
        this.usuariosForm.setControl('username', new FormControl(this.formsService.usuario.username, Validators.required));
        this.usuariosForm.setControl('password', new FormControl(this.formsService.usuario.password, Validators.required));
        this.usuariosForm.setControl('telefono', new FormControl(this.formsService.usuario.telefono, Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])));
    }

    
    
  }  

  usuariosForm = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', Validators.required ],
    username: ['',Validators.required ],
    password:['', Validators.required],
    telefono:['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])]
  })

  onSubmit(): void{

    if(this.usuariosForm.valid){

      if(this.formsService.title === "Editar"){

        console.log(this.formsService.usuario);
        
        let edit_user : UsuarioMV ={
          id :  this.formsService.usuario.id,
          nombre: this.usuariosForm.controls['nombre'].value,
          apellido:this.usuariosForm.controls['apellido'].value,
          email:this.usuariosForm.controls['email'].value,
          username:this.usuariosForm.controls['username'].value,
          password:this.usuariosForm.controls['password'].value,
          enabled: this.formsService.usuario.enabled,
          telefono: this.usuariosForm.controls['telefono'].value,
          perfil: this.formsService.usuario.perfil,
        }

        console.log(edit_user);
        
        this.api.Put("usuarios/", edit_user.id, edit_user)

        setInterval(()=>{
          window.location.reload();
        }, 2000)

        swal.fire(
          'Envio satisfactorio!',
          'Editado',
          'success'
        )
      }

      if(this.formsService.title === "Crear"){

        const new_user : UsuarioMV = {
          nombre: this.usuariosForm.controls['nombre'].value,
          apellido:this.usuariosForm.controls['apellido'].value,
          email:this.usuariosForm.controls['email'].value,
          username:this.usuariosForm.controls['username'].value,
          password:this.usuariosForm.controls['password'].value,
          telefono: this.usuariosForm.controls['telefono'].value,
        }
        console.log(new_user);

        this.api.Post("usuarios/", new_user);

        setInterval(()=>{
          window.location.reload();
        }, 2000)

        swal.fire(
          'Envio satisfactorio!',
          'Guardado',
          'success'
        )        
      }

    }else{
      swal.fire(
        'No se guardaron los datos!',
        'Error',
        'error'
      )
    }

  }
}
