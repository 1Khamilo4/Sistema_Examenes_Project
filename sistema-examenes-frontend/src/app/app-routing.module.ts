import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { FormCategoriasComponent } from './components/forms/form-categorias/form-categorias.component';
import { FormExamenesComponent } from './components/forms/form-examenes/form-examenes.component';
import { FormPreguntasComponent } from './components/forms/form-preguntas/form-preguntas.component';
import { FormUsuariosComponent } from './components/forms/form-usuarios/form-usuarios.component';
import { FormLoginComponent } from './components/forms/form-login/form-login.component';

const routes: Routes = [
  {
    path:"usuarios",
    component: UsuariosComponent,
    pathMatch:"full"
  },
  {
    path:"categorias",
    component: CategoriasComponent,
    pathMatch:"full"
  },
  {
    path:"examenes",
    component: ExamenesComponent,
    pathMatch:"full"
  },
  {
    path:"preguntas",
    component: PreguntasComponent,
    pathMatch:"full"
  },

  //Rutas formularios
  {
    path:"form-categorias",
    component: FormCategoriasComponent,
    pathMatch:"full"
  },
  {
    path:"form-examenes",
    component: FormExamenesComponent,
    pathMatch:"full"
  },
  {
    path:"form-preguntas",
    component: FormPreguntasComponent,
    pathMatch:"full"
  },
  {
    path:"form-usuarios",
    component: FormUsuariosComponent,
    pathMatch:"full"
  },

  {
    path:"forgot-password",
    component: FormLoginComponent,
    pathMatch:"full"
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
