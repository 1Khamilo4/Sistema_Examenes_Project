import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormCategoriasComponent } from 'src/app/components/forms/form-categorias/form-categorias.component';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})

export class CategoriasComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [];
  dataSource : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( public api: RestService, public dialog: MatDialog ){
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

  public del_obtenerCategoria(){
    this.api.Delete("categorias/", "1");
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
  btnEliminar(){
    alert("Btn de Eliminar");
    return false;
  }

  openDialog(){

    this.dialog.open(FormCategoriasComponent);

  }




}
