import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})

export class PreguntasComponent implements OnInit, AfterViewInit{

  displayedColumns : string[] = [];
  dataSource : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( public api:RestService ){
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {

    this.get_obtenerPregunta();
    /* this.post_crearPreguntas();
    this.put_editPregunta();
    this.del_pregunta(); */

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public get_obtenerPregunta(){

    this.api.Get("preguntas/").then((res)=>{

      if(res.length > 0){

        this.loadTable(res[0]);

        let new_data = Object.assign([], res);

        res.map((i, index)=>{
          new_data[index].examen = i.examen.titulo;
        })

        console.log(res);
        console.log(new_data);
        this.dataSource.data = new_data;
        
      }else{
        throw new Error("No hay datos")
      }    
      
    })

  }

  public post_crearPreguntas(){
    this.api.Post("preguntas/",{

      contenido:"¿Que es POO?",
      imagen:"poo.png",
      opcion1:"Paradigma de programacion",
      opcion2:"Es un conjunto de elementos relacionados",
      opcion3:"Es un lenguaje de programacion orientado a objetos",
      opcion4:"Son patrones diseñados",
      respuesta: "Paradigma de programacion",
      examen:{
          examenId:1
      }

    })
  }

  public put_editPregunta(){

    this.api.Put("preguntas/", "1", {

      contenido:"¿Que es POO?",
      imagen:"poo.png",
      opcion1:"Un paradigma de programacion",
      opcion2:"Es un conjunto de elementos relacionados y conectados",
      opcion3:"Es un lenguaje de programacion orientado a objetos",
      opcion4:"Son patrones diseñados",
      respuesta: "Un paradigma de programacion",
      examen:{
          examenId:1
      }

    })

  }

  public del_pregunta(){

    this.api.Delete("preguntas/", "1")

  }

  
  loadTable(data:any){

    this.displayedColumns = [];
    for(let colums in data){
      this.displayedColumns.push(colums);
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
