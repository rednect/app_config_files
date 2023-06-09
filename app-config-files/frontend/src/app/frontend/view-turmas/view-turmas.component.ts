import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { TurmasFormsComponent } from '../turmas-forms/turmas-forms.component';
import { MatDialog } from '@angular/material/dialog';
import { TurmaElement } from 'src/app/backend/model/turmaElement';

interface materias {
  value: string;
  viewValue: string;
}

interface turmas {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-view-turmas',
  templateUrl: './view-turmas.component.html',
  styleUrls: ['./view-turmas.component.scss']
})
export class ViewTurmasComponent {
  dataSource: TurmaElement[] = [];

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  turmas: any[] = [];
  materias: any[] = [];

  constructor(private dialog: MatDialog) {}
  
  openDialog(element: TurmaElement| null): void {
    const dialogRef = this.dialog.open(TurmasFormsComponent, {
      width: '250px',
      data: element === null ?{
        course_name: '',
        class_name: ''
      } : {}
    });
  }
}