import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ExamenesComponent } from './pages/examenes/examenes.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
