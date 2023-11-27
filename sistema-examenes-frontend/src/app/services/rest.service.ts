import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioMV } from '../Models/usuario-mv';

@Injectable({
  providedIn: 'root'
})


export class RestService {

  url = 'http://localhost:8080/';

  constructor( public api:HttpClient ) { } /* Injeccion de dependencias 'public api: HttpClient'*/

  public async Get( controller:String ){

    let result:any;

    await this.api.get(this.url+controller).toPromise().then((data)=>{
        result = data;
    });
    
    return result;
    
  }

  public async Post( controller:String, obj : any ){
    let result: any;
    await this.api.post( this.url+controller, obj ).toPromise().then( (res)=>{    
      
      result = res;
      console.log("Servicio: ",res);
      
      
    })
    
    return result;
    
  }
  public Put( controller:String,  id: number | string, obj:any ){

    this.api.put( this.url+controller+id, obj ).toPromise().then( (res)=>{
      
      console.log(res);
      
    } )
    
  }
  public Delete( controller:String, id:string ){

    this.api.delete( this.url+controller+id ).toPromise().then( (res)=>{
      
      console.log(res);
      
    })
    
  }

  //Login Put

  public async Put_loginPass(controller:string, obj:any ){

    let result: any;

    await this.api.put( this.url+controller+"/"+obj.username+"/"+obj.password, null ).toPromise().then((res)=>{
        result = res;
        console.log(result);
        
    })

    return result;
  }
  
    
}

  

