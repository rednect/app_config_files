import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TurmaElement } from 'src/app/backend/model/turmaElement';
import { ViewTurmasComponent } from '../view-turmas/view-turmas.component';

@Component({
  selector: 'app-turmas-forms',
  templateUrl: './turmas-forms.component.html',
  styleUrls: ['./turmas-forms.component.scss']
})
export class TurmasFormsComponent {

  element!: TurmaElement;
  constructor(
  @Inject(MAT_DIALOG_DATA)
  public data: TurmaElement,
  public dialogRef: MatDialogRef<TurmasFormsComponent>,
  ) {}

  onCancel(): void {
  this.dialogRef.close();
  }
}