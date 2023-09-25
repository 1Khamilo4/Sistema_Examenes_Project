import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
//En este archivo importamos la clase: MatTableDataSource
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = [];/**Se crea una estructura de datos, que va a tener el nombre de las columnas */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource : MatTableDataSource<any>;/**Se instancia el dataSource para poder guardar los datos json que se traen desde la peticion GET*/

  constructor(public api:RestService){
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

      /* for(let i = 0; i < res.length; i++ ){//Se itera sobre el objeto que resivimos en el servicio get

          this.loadTable( [res[i]] );

      } */

      
        
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

  public del_usuario(){
    this.api.Delete("usuarios/","6");
  }

  loadTable(data:any){/**Funcion para iterar el objeto que se recive y agregar el nombre de las propiedades a la variable arreglo 
  que va a almacenar el nombre de las columnas 'displayedColumns'*/

    this.displayedColumns = [];

    for(let column in data){
      this.displayedColumns.push(column);
    }

    /* this.displayedColumns.push([data]); */
    console.log(this.displayedColumns);
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
