import { Component, Inject, NgModule, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { TurmasFormsComponent } from '../turmas-forms/turmas-forms.component';
import { MatDialog } from '@angular/material/dialog';
import { TurmaElement } from 'src/app/backend/model/turmaElement';
import { TurmaElementService } from 'src/app/services/turmaElement.service';
import { AlunoElementService } from 'src/app/services/alunoElement.service';


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
  styleUrls: ['./view-turmas.component.scss'],
  providers: [TurmaElementService, AlunoElementService]
})
export class ViewTurmasComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  isChecked = true;
  formGroup = this.formBuilder.group({
    presence: ''
  })
  displayedColumns: string[] = ['nome_aluno', 'tia', 'falta'];
  showButton: boolean = false
  dataSource: TurmaElement[] = [];
  turmas: any[] = [];
  materias: any[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private dialog: MatDialog,
    public alunoElementService: AlunoElementService,
    public turmaElementService : TurmaElementService,
  ) {
    this.turmaElementService.getTurmas()
      .subscribe((response: any[]) => {
        this.turmas = response.map(valor => valor.class_name);
        this.materias = response.map(valor => valor.course_name)
        console.log(this.turmas);
        console.log(this.materias);
      });
  }
  
ngOnInit(): void {
}
getAlunosFilter(turma: string, materia: string) {
  this.alunoElementService.getAlunos().subscribe(
    (alunos: any[]) => {
      console.log(alunos)
      const alunosFiltrados = alunos.filter(aluno => aluno.sala_aluno === turma && aluno.curso_aluno === materia);
      // console.log(alunosFiltrados);
      this.dataSource = alunosFiltrados;
      console.log(this.dataSource)
      this.showButton = this.dataSource.length > 0;
    }
  );
}

getAlunosList(alunosFiltrados: any){
  this.alunoElementService.getAlunos()
}

alertFormValues(formGroup: FormGroup){
  alert(JSON.stringify(formGroup.value, null, 2));
}

openDialog(element: TurmaElement| null): void {
  const dialogRef = this.dialog.open(TurmasFormsComponent, {
    width: '250px',
    data: element === null ?{
      course_name: '',
      class_name: ''
    } : {
      course_name: element.course_name,
      class_name: element.class_name
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    this.turmaElementService.createTurmas(result)
      .subscribe((data:TurmaElement) => {

        this.dataSource.push(result);
        window.location.reload();

      console.log('Turma criada com sucesso!', result);
    }, error => {
      console.log(result)
      console.error('Erro ao criar Turma:', error);
    });
  });
}

}