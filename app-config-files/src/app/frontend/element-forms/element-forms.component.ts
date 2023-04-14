import { Component, Inject } from '@angular/core';
import { AlunoElement } from '../home/home.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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
