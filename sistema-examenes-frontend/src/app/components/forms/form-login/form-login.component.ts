import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/services/forms.service';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{

  form_title:string;
  btn_title:string;
  constructor( private fb:FormBuilder, public api:RestService, public formsService:FormsService,public dialog: MatDialog ){}
  
  ngOnInit(): void {

    if(this.formsService.form_title === "login"){
      this.form_title = "Inicio de sesion";
      this.btn_title = "Iniciar sesion"
    }

    if(this.formsService.form_title === "edit_pass"){
      this.form_title = "Actualizar contraseña";
      this.btn_title = "Actualizar"
    }

    console.log("form_title:",this.formsService.form_title);
    
    
  }

  loginForm = this.fb.group({
    username: ['',Validators.required ],
    password:['', Validators.required],
  })

  async acceder(){
    
    if(this.loginForm.valid){

      if(this.formsService.form_title === "login"){

        const auth_user ={
          username : this.loginForm.controls['username'].value,
          password : this.loginForm.controls['password'].value,
        }
  
        await this.api.Post("login/", auth_user).then((result)=>{
          Swal.fire(
            'Usuario autenticado!',
            'Validado',
            'success'
          )     
  
          /* this.formsService.auth = true;  
          console.log("form",result); */ 
  
          localStorage.setItem("nombre", result.nombre);
          localStorage.setItem("apellido", result.apellido);
          localStorage.setItem("correo", result.email);
          localStorage.setItem("username", result.username);
          localStorage.setItem("auth", true.toString() );
  
          setTimeout(()=>{
            window.location.reload();
          }, 1000)
  
        }).catch(()=>{
          Swal.fire(
            'Usuario no registrado!',
            'Error',
            'error'
          )
          this.formsService.auth = false;
          localStorage.setItem("auth", this.formsService.auth.toString() )
        });
      }

      if(this.formsService.form_title === "edit_pass"){

        const auth_user ={
          username : this.loginForm.controls['username'].value,
          password : this.loginForm.controls['password'].value,
        }

        await this.api.Put_loginPass("login", auth_user ).then((res)=>{
          Swal.fire(
            'Usuario autenticado!',
            'Validado',
            'success'
          )  
          console.log(res);

          this.dialog.closeAll();
          
          this.dialog.afterAllClosed.subscribe(
            ()=>{
              this.formsService.form_title = "login"
            }
          )
          
        }).catch((err)=>{
          Swal.fire(
            'Contraseña no actualizada ',
            'Usuario/Contraseña no valida',
            'error'
          )
          console.log(err);
        });
  
        
      }      
        
    }else{
      Swal.fire(
        'Llene todos los campos!',
        'Error',
        'error'
      )
    }
  }

  forgotPass(){
    
    this.formsService.form_title = "edit_pass"

    this.dialog.open(FormLoginComponent, {
      width: '50%',
      height: "60%"
    });

    this.dialog.afterAllClosed.subscribe(
      ()=>{
        this.formsService.form_title = "login"
      }
    )
     

    return false;
  }

}
