import { Component } from '@angular/core';
// import { AlunoElement } from './backend/model/AlunoElement';

export interface AlunoElement {
  nome: string;
  position: number;
  tia: string;
}
const ELEMENT_DATA: AlunoElement[] = [
  {position: 1, nome: 'Lucas', tia: '32129610'},
  {position: 2, nome: 'Pedro', tia: '32029401'}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'nome', 'tia'];
  dataSource = ELEMENT_DATA;

}
