import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})

export class PreguntasComponent implements OnInit{

  constructor( public api:RestService ){}

  ngOnInit(): void {
    this.get_obtenerPregunta();
  }

  public get_obtenerPregunta(){
    this.api.Get("preguntas/")
  }



}
