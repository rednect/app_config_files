import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontend/home/home.component';
import { addAlunoComponent } from './frontend/addAluno/addAluno.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'gerenciar', component: addAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
