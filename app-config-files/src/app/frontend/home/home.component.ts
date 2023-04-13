import { Component } from '@angular/core';

// import { AlunoElement } from './backend/model/AlunoElement';

export interface AlunoElement {
  nome: string;
  tia: string;
}
const ELEMENT_DATA: AlunoElement[] = [
  {nome: 'Lucas', tia: '32129610'},
  {nome: 'Pedro', tia: '32029401'}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['nome', 'tia', 'acoes'];
  dataSource = ELEMENT_DATA;

}
