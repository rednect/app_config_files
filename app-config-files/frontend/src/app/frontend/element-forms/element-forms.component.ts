import { Component, Inject } from '@angular/core';
import { AlunoElement } from 'src/app/backend/model/alunoElement';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { addAlunoComponent } from '../addAluno/addAluno.component';

@Component({
  selector: 'app-element-forms',
  templateUrl: './element-forms.component.html',
  styleUrls: ['./element-forms.component.scss']
})
export class ElementFormsComponent {

  element!: AlunoElement;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: AlunoElement,
    public dialogRef: MatDialogRef<ElementFormsComponent>,
  ) {}


  onCancel(): void {
    this.dialogRef.close();
  }
}
