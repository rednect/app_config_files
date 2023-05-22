import { Component, ViewChild } from '@angular/core';
import { ElementFormsComponent } from '../element-forms/element-forms.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AlunoElement } from 'src/app/backend/model/alunoElement';
import { AlunoElementService } from 'src/app/services/alunoElement.service';

// import { AlunoElement } from './backend/model/AlunoElement';


const ELEMENT_DATA: AlunoElement[] = [
  {nome: 'Lucas', tia: '32129610'},
  {nome: 'Pedro', tia: '32029401'}
];

@Component({
  selector: 'app-home',
  templateUrl: './addAluno.component.html',
  styleUrls: ['./addAluno.component.scss'],
  providers: [AlunoElementService]
})
export class addAlunoComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['nome', 'tia', 'acoes'];
  dataSource: AlunoElement[] = [];

  constructor(
    public dialog: MatDialog,
    public alunoElementService: AlunoElementService
    ) {
      this.alunoElementService.getAlunos()
        .subscribe((data: AlunoElement[]) => {
          this.dataSource = data;
        });
    }



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

