import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
  styleUrls: ['./icon-user.component.css']
})
export class IconUserComponent implements OnInit{

  nombre_icon:string;
  full_name:string;  
  email:string;
  username:string;

  ngOnInit(): void {
    
    this.nombre_icon = localStorage.getItem("nombre") +" " +localStorage.getItem("apellido");
    this.full_name = localStorage.getItem("nombre") +" " +localStorage.getItem("apellido");
    this.email = localStorage.getItem("correo");
    this.username = localStorage.getItem("username")

  }

  
}
