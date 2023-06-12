import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProfessorElement } from 'src/app/backend/model/professorElement';
import { AddProfessoresComponent } from '../add-professores/add-professores.component';

@Component({
  selector: 'app-professor-forms',
  templateUrl: './professor-forms.component.html',
  styleUrls: ['./professor-forms.component.scss']
})
export class ProfessorFormsComponent {

  element!: ProfessorElement;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ProfessorElement,
    public dialogRef: MatDialogRef<ProfessorFormsComponent>,
  ) {}

  
  onCancel(): void {
    this.dialogRef.close();
  }
}
