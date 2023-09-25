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

import { UsuariosComponent } from './pages/usuarios/usuarios.component';

/* Avatar */
import { AvatarModule } from 'ngx-avatars';

//Tablas : Modificamos el archivo 'app.module.ts' donde debemos importar MatTableModule, MatPaginatorModule, BrowserAnimationsModule:
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';

import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { IconUserComponent } from './components/icon-user/icon-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsuariosComponent,
    CategoriasComponent,
    ExamenesComponent,
    PreguntasComponent,
    IconUserComponent,
    
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
