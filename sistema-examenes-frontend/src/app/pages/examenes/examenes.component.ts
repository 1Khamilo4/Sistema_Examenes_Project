import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormExamenesComponent } from 'src/app/components/forms/form-examenes/form-examenes.component';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})

export class ExamenesComponent implements OnInit, AfterViewInit {

  displayedColumns : string[] = [];
  dataSource : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( public api:RestService, public dialog: MatDialog){
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.get_obtenerExamenes();
    /* this.post_crearExamen();
    this.put_actualizarExamen();
    this.del_obtenerExamenes(); */
  }

  ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  public get_obtenerExamenes(){
    this.api.Get("examenes/").then((res)=>{

      if( res.length > 0){

        this.loadTable(res[0]);

        let new_data = Object.assign([], res);         

        res.map((i, index)=>{

          new_data[index].categoria = i.categoria.titulo;           
           
        })
        
        this.dataSource.data = new_data;

        console.log(this.dataSource.data);        
        

      }else{
        throw new Error("No hay datos");
      }      
              
    })
  }

  public post_crearExamen(){

    this.api.Post("examenes/", {

      titulo: "Test Historia",
      descripcion: "Con esta prueba se pondra en practica los conocimientos sobre la historia",
      puntosMaximos:"20",
      numeroDePreguntas:"10",
      categoria:{
          categoriaId:2
      }

    });

  }

  public put_actualizarExamen(){

    this.api.Put("examenes/", "1", {

      titulo: "Prueba Java",
      descripcion: "Con esta prueba se pondra en practica los conocimientos sobre Java Core y POO",
      puntosMaximos:"40",
      numeroDePreguntas:"15",
      categoria:{
          categoriaId:1
      }

    });

  }

  public del_obtenerExamenes(){
    this.api.Delete("examenes/", "1");
  }

  loadTable(data:any){

    this.displayedColumns = [];

    for( let column in data){
      this.displayedColumns.push(column);
    }

    this.displayedColumns.push("acciones")
    console.log(this.displayedColumns);
    
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  btnEditar(){
    alert("Btn de editar");
    return false;
  }
  btnEliminar(){
    alert("Btn de Eliminar");
    return false;
  }

  openDialog(){

    this.dialog.open(FormExamenesComponent,{
      height: '80%',
      width: '48%',
      
    });

  }

}
