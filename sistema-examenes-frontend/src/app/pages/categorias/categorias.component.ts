import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{

  constructor( public api: RestService){

  }

  ngOnInit(): void {
    this.get_obtenerCategorias();
  }

  public get_obtenerCategorias(){
    this.api.Get("categorias/");
  }

}
