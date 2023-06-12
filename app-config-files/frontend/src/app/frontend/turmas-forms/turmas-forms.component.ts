import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TurmaElement } from 'src/app/backend/model/turmaElement';

@Component({
  selector: 'app-turmas-forms',
  templateUrl: './turmas-forms.component.html',
  styleUrls: ['./turmas-forms.component.scss']
})


export class TurmasFormsComponent {

  constructor(
  @Inject(MAT_DIALOG_DATA)
  public data: TurmaElement,
  private dialogRef: MatDialogRef<TurmasFormsComponent>) {}

onCancel(){
  this.dialogRef.close();
  }
}