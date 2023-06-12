import { Component, Inject } from '@angular/core';
import { AlunoElement } from 'src/app/backend/model/alunoElement';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { addAlunoComponent } from '../addAluno/addAluno.component';
import { TurmaElementService } from 'src/app/services/turmaElement.service';

@Component({
  selector: 'app-element-forms',
  templateUrl: './element-forms.component.html',
  styleUrls: ['./element-forms.component.scss'],
  providers: [TurmaElementService]
})
export class ElementFormsComponent {
turmas: string[] = []
materias: string[] = []

  element!: AlunoElement;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: AlunoElement,
    public turmaElementService: TurmaElementService,
    public dialogRef: MatDialogRef<ElementFormsComponent>,
  ) {
    this.turmaElementService.getTurmas().subscribe(
      (response: any[]) => {
        this.turmas = response.map(valor => valor.class_name);
        this.materias = response.map(valor => valor.course_name);
        console.log(this.turmas);
        console.log(this.materias);
      })
  }


  
  onCancel(): void {
    this.dialogRef.close();
  }
}
