import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { addAlunoComponent } from './frontend/addAluno/addAluno.component';
import { ViewTurmasComponent } from './frontend/view-turmas/view-turmas.component';
import { AddProfessoresComponent } from './frontend/add-professores/add-professores.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'gerenciar', component: addAlunoComponent
  },
  {
    path: 'menu', component: HomeComponent
  },
  {
    path: 'lista', component: ViewTurmasComponent
  },
  {
    path: 'professor', component: AddProfessoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
