import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormLoginComponent } from '../forms/form-login/form-login.component';

@Component({
  selector: 'app-btn-login',
  templateUrl: './btn-login.component.html',
  styleUrls: ['./btn-login.component.css']
})
export class BtnLoginComponent {

  constructor(public dialog: MatDialog){}

  accederLogin(){
    this.dialog.open(FormLoginComponent, {
      height: '60%',
      width: '60%'
    });
  }

  cambiarColor(){
    let xd = document.getElementById("xd");   
    
  }

     
}
