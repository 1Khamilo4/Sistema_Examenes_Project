import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
//En este archivo importamos la clase: MatTableDataSource
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormUsuariosComponent } from 'src/app/components/forms/form-usuarios/form-usuarios.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [];/**Se crea una estructura de datos, que va a tener el nombre de las columnas */
  dataSource : MatTableDataSource<any>;/**Se instancia el dataSource para poder guardar los datos json que se traen desde la peticion GET*/
  cargando:boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api:RestService, public dialog: MatDialog ){
    this.cargando = true;
    this.dataSource = new MatTableDataSource();
  }  
  
  ngOnInit(): void {

    this.get_obtenerUsuario();
    /* this.post_usuario();
    this.put_usuario();
    this.del_usuario(); */
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'registro por pagina';
  }

  public get_obtenerUsuario(){

    this.api.Get("usuarios/").then((res)=>{

      if(res.length != 0){
        
        this.loadTable(res[0]);

        this.dataSource.data=res;

        console.log(this.dataSource.data);
        
        console.log(res);
      }else{
        throw new Error("No hay datos")
      }    
      
      this.cargando = false;
    })
    
  }

  public post_usuario(){
    this.api.Post("usuarios/",{
      apellido:"Valencia",
      email:"j@gmail.com",
      nombre:"Jhonatan",
      password:"123456",
      telefono:"123445",
      username:"DJplay",
      perfil:"test.png"
    })
  }

  public put_usuario(){
    this.api.Put("usuarios/","1",{
      apellido:"Zambrano",
      email:"cami@gmail.com",
      nombre:"Camilo",
      password:"123456",
      telefono:"123445",    
      perfil:"test.png"
    } )
  }

  public del_usuario(id:string){
    this.api.Delete("usuarios/",id);
    return false;
  }

  loadTable(data:any){/**Funcion para iterar el objeto que se recive y agregar el nombre de las propiedades a la variable arreglo 
  que va a almacenar el nombre de las columnas 'displayedColumns'*/

    this.displayedColumns = [];

    for(let column in data){
      this.displayedColumns.push(column);
    }

    /* this.displayedColumns.push([data]); */
    console.log(this.displayedColumns);
    this.displayedColumns.push("acciones")
    
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
  /* btnEliminar(  ){
    alert("Btn de Eliminar");
    return false;
  } */

  btnEliminar(id: string) {

    Swal.fire({
      title: 'Esta seguro de eliminar al Usuario?',
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
            `El usuario con el id ${id} ha sido eliminado.`,
            'success'
          )
          
          setInterval(()=>{
          window.location.reload();
          }, 2000)

        this.del_usuario(id);
      }
    })
    
    return false;
    
  }

  openDialog(){

    this.dialog.open(FormUsuariosComponent, {
      width: '40%'
    });

  }

}
