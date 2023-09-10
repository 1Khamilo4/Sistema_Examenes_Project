import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  uri = 'http://localhost:8080/';
  constructor( public api:HttpClient ) { } /* Injeccion de dependencias 'public api: HttpClient'*/

  public Get( controller:String ){

    this.api.get( this.uri+controller ).toPromise().then( (res)=>{
      
      console.log(res);
      
    } )
    
  }
}
