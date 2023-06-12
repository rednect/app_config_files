import { Component, Inject, NgModule, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { TurmasFormsComponent } from '../turmas-forms/turmas-forms.component';
import { MatDialog } from '@angular/material/dialog';
import { TurmaElement } from 'src/app/backend/model/turmaElement';
import { TurmaElementService } from 'src/app/services/turmaElement.service';
import { AlunoElementService } from 'src/app/services/alunoElement.service';
import { AlunoElement } from 'src/app/backend/model/alunoElement';
import { PresenceElementService } from 'src/app/services/presenceElement.service';
import { PresencaElement } from 'src/app/backend/model/presencaElement';

export interface PresenceSourceData {
  nome_aluno: string;
  tia: string;
  data: Date;
}

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
  providers: [TurmaElementService, AlunoElementService, PresenceElementService]
})
export class ViewTurmasComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  colunasMostradas: string[] = ['nome_falta', 'tia_falta', 'data_falta', 'acoes']
  displayedColumns: string[] = ['nome_aluno', 'tia', 'falta'];
  showButton: boolean = false
  alunoSource: AlunoElement[] = [];
  dataSource: TurmaElement[] = [];
  turmas: any[] = [];
  materias: any[] = [];
  presences: TurmaElement[] = [];
  dataSourcePresenca: PresenceSourceData[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private dialog: MatDialog,
    public presenceElementService: PresenceElementService,
    public alunoElementService: AlunoElementService,
    public turmaElementService : TurmaElementService,
  ) {
    this.turmaElementService.getTurmas()
      .subscribe((response: any[]) => {
        this.presences = response;
        this.turmas = response.map(valor => valor.class_name);
        this.materias = response.map(valor => valor.course_name)
        // console.log(this.turmas);
        // console.log(this.materias);
      });
  }
  
ngOnInit(): void{
}
reloadPage(){
  window.location.reload();
}

getPresenca(nomealuno: string, tia: string, data: string){

  this.presenceElementService.getPresences().subscribe(
    (presence: PresenceSourceData[]) => {
      console.log(presence);
      this.dataSourcePresenca = presence;
    }) 
}


getAlunosFilter(turma: string, materia: string) {
  this.alunoElementService.getStudent().subscribe(
    (alunos: any[]) => {
      console.log(alunos)
      const alunosFiltrados = alunos.filter(aluno => aluno.student_details.sala_aluno === turma && aluno.student_details.curso_aluno === materia);
      console.log(alunosFiltrados);
      this.dataSource = alunosFiltrados;
      // console.log(this.dataSource)
      this.showButton = this.dataSource.length > 0;
    }
  );
}

togglePresence(element: TurmaElement) {

  const currentDate = new Date().toLocaleDateString('en-US' , {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit'
  })

  let response = {
    idAluno: element.id,
    presenca: !element.presence,
    data: new Date()
    }
  
  console.log(response)
  this.presenceElementService.createPresences(response)
    .subscribe((data:PresencaElement) => {
    console.log(data);
  });
}

getAlunosList(alunosFiltrados: any){
  this.alunoElementService.getAlunos()
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

deletePresenca(id: number) {
  this.presenceElementService.deletePresences(id)
    .subscribe(() => {
      (response: any) => [
        console.log('Excluído com sucesso' + response)
      ]
    })

}

}