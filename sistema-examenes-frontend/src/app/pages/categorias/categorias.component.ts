import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormCategoriasComponent } from 'src/app/components/forms/form-categorias/form-categorias.component';
import { RestService } from 'src/app/services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})

export class CategoriasComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [];
  dataSource : MatTableDataSource<any>;
  cargando:Boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( public api: RestService, public dialog: MatDialog ){
    this.cargando=true;
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.get_obtenerCategorias();
    
    /* this.post_crearCategoria();
    this.put_actualizarCategoria();
    this.del_obtenerCategoria(); */
  }

  ngAfterViewInit(): void {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'registro por pagina';
    
  }

  public get_obtenerCategorias(){

    this.api.Get("categorias/").then((res)=>{
      
      
      if(res.length != 0){

        this.loadTable(res[0]);

        let new_data = Object.assign([], res);

        res.map((i, index)=>{
          new_data[index].usuario = i.usuario.username;
        })

        this.dataSource.data = new_data;
        console.log(this.dataSource.data);
        
      }else{
        throw new Error("No hay datos");
      }      
      
      this.cargando = false;
      
    })
    
  }


  public post_crearCategoria(){

    this.api.Post("categorias/",{
      titulo: "Matemáticas",
      descripcion: "Categoría para exámenes de matemáticas"
    });

  }

  public put_actualizarCategoria(){

    this.api.Put("categorias/", "1", {
      titulo: "Historia",
      descripcion: "Categoría para exámenes de historia"
    });

  }

  public del_obtenerCategoria(id:string){
    this.api.Delete("categorias/", id);
  }

  loadTable(data:any){

    this.displayedColumns = [];

    for(let columns in data){

      this.displayedColumns.push(columns);

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
      title: 'Esta seguro de eliminar el Componente?',
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
            `El componente con el id ${id} ha sido eliminado.`,
            'success'
          )
          
          setInterval(()=>{
          window.location.reload();
          }, 2000)

        /* this.del_obtenerCategoria(id); */
      }
    })
    
    return false;

  }

  openDialog(){

    this.dialog.open(FormCategoriasComponent);

  }




}
