import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {

  constructor( public api:RestService){}

  ngOnInit(): void {
    this.get_obtenerExamenes();
  }

  public get_obtenerExamenes(){
    this.api.Get("examenes/");
  }

}
