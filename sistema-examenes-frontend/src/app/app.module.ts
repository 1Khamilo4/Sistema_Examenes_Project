import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

/* Angular Material */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';


import { UsuariosComponent } from './pages/usuarios/usuarios.component';

/* Avatar */
import { AvatarModule } from 'ngx-avatars';

//Tablas : Modificamos el archivo 'app.module.ts' donde debemos importar MatTableModule, MatPaginatorModule, BrowserAnimationsModule:
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';

//Declaraciones componentes 
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { IconUserComponent } from './components/icon-user/icon-user.component';
import { FormCategoriasComponent } from './components/forms/form-categorias/form-categorias.component';
import { FormExamenesComponent } from './components/forms/form-examenes/form-examenes.component';
import { FormPreguntasComponent } from './components/forms/form-preguntas/form-preguntas.component';
import { FormUsuariosComponent } from './components/forms/form-usuarios/form-usuarios.component';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Dialog */
import {MatDialogModule} from '@angular/material/dialog';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsuariosComponent,
    CategoriasComponent,
    ExamenesComponent,
    PreguntasComponent,
    IconUserComponent,
    FormCategoriasComponent,
    FormExamenesComponent,
    FormPreguntasComponent,
    FormUsuariosComponent,
    SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AvatarModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
