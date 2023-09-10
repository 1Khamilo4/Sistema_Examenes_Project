import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit{

  constructor(public api:RestService){

  }
  
  ngOnInit(): void {
    this.get_obtenerUsuario();
  }

  public get_obtenerUsuario(){
    this.api.Get("usuarios/");
  }

}
