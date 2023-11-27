import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsService } from './services/forms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit{
  title = 'sistema-examenes-frontend';
  auth:boolean = false;
  constructor(public formsService:FormsService){}

  ngAfterViewInit(): void {
    console.log("Local", localStorage.getItem("auth"));
    
  }


  ngOnInit(): void {
    
    this.formsService.form_title = "login";
    if(localStorage.getItem("auth") === "true"){
      this.auth = true;
      
      
    }else if(localStorage.getItem("auth") === "false"){
      this.auth = false;
      
    }

    console.log("auth",this.auth);

    
  }
}
