import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public Post( controller:String, obj : any ){

    this.api.post( this.url+controller, obj ).toPromise().then( (res)=>{
      
      console.log(res);
      
    } )
    
  }
  public Put( controller:String,  id:string, obj:any ){

    this.api.put( this.url+controller+id, obj ).toPromise().then( (res)=>{
      
      console.log(res);
      
    } )
    
  }
  public Delete( controller:String, id:string ){

    this.api.delete( this.url+controller+id ).toPromise().then( (res)=>{
      
      console.log(res);
      
    })
    
  }
  
    
}

  

