import { Component, ViewChild } from '@angular/core';
import { ElementFormsComponent } from '../element-forms/element-forms.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

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
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['nome', 'tia', 'acoes'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

    openDialog(element: AlunoElement| null): void {
      const dialogRef = this.dialog.open(ElementFormsComponent, {
        data: element === null ?{
          nome: null
        } : element
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result !== undefined) {
          this.dataSource.push(result);
          this.table.renderRows();
        }
      });
    }
    }

