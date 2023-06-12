import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProfessorElement } from 'src/app/backend/model/professorElement';
import { AddProfessoresComponent } from '../add-professores/add-professores.component';
import { TurmaElementService } from 'src/app/services/turmaElement.service';

@Component({
  selector: 'app-professor-forms',
  templateUrl: './professor-forms.component.html',
  styleUrls: ['./professor-forms.component.scss'],
  providers: [TurmaElementService]
})
export class ProfessorFormsComponent {
turmas: string[] = []

  element!: ProfessorElement;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ProfessorElement,
    public turmaElementService: TurmaElementService,
    public dialogRef: MatDialogRef<ProfessorFormsComponent>,
  ) {
    this.turmaElementService.getTurmas().subscribe(
      (response: any[]) => {
        this.turmas = response.map(valor => valor.course_name);
        console.log(this.turmas);
      })
  }

  
  onCancel(): void {
    this.dialogRef.close();
  }
}
