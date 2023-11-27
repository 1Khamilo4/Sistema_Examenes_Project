import { Injectable } from '@angular/core';
import { UsuarioMV } from '../Models/usuario-mv';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  
  title:string;
  usuario:UsuarioMV;
  auth:boolean = false;
  form_title:string;

  constructor() { }
}
