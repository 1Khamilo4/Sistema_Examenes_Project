import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormExamenesComponent } from 'src/app/components/forms/form-examenes/form-examenes.component';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})

export class ExamenesComponent implements OnInit, AfterViewInit {

  displayedColumns : string[] = [];
  dataSource : any;
  cargando: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( public api:RestService, public dialog: MatDialog){
    this.cargando = true
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
    this.paginator._intl.itemsPerPageLabel = 'registro por pagina';

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
      this.cargando = false;  
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

  public del_obtenerExamenes( id:string){
    this.api.Delete("examenes/", id);
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

  btnEliminar(id:string){

    Swal.fire({
      title: 'Esta seguro de eliminar el examen?',
      text: "No podra revertir esta operacion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      
      if (result.isConfirmed) {

          Swal.fire(
            'Eliminado!',
            `El examen con el id ${id} ha sido eliminado.`,
            'success'
          )
          
          setInterval(()=>{
          window.location.reload();
          }, 2000)

        /* this.del_obtenerExamenes(id); */
      }
    })
    
    return false;

  }

  openDialog(){

    this.dialog.open(FormExamenesComponent,{
      height: '80%',
      width: '48%',
      
    });

  }

}
