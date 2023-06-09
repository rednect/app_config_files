import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ProfessorElement } from 'src/app/backend/model/professorElement';
import { ProfessorElementService } from 'src/app/services/professorElement.service';
import { ProfessorFormsComponent } from '../professor-forms/professor-forms.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-professores',
  templateUrl: './add-professores.component.html',
  styleUrls: ['./add-professores.component.scss'],
  providers: [ProfessorElementService]
})
export class AddProfessoresComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['nome_professor', 'tia', 'curso', 'acoes'];
  dataSource: ProfessorElement[] = [];

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    public professorElementService: ProfessorElementService
    ) {
      this.professorElementService.getProfessores()
        .subscribe((data: ProfessorElement[]) => {
          console.log(data)
          this.dataSource = data;
        });
    }

    ngOnInit(): void {
    }

  // reloadDelay(delay:number){
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, delay);
  // }

  openDialog(element: ProfessorElement| null): void {
    const dialogRef = this.dialog.open(ProfessorFormsComponent, {
      width: '250px',
      data: element === null ?{
        nomeProfessor: '',
        tia: '',
        course_name: ''
      } : {
        id: element.id,
        nome: element.nomeProfessor,
        tia: element.tia,
        course_name: element.course_name
        // turma: element.turma
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.professorElementService.createProfessores(result)
        .subscribe((data:ProfessorElement) => {

          this.dataSource.push(result);
          this.table.renderRows();
          window.location.reload();

        console.log('Professor criado com sucesso!', result);
      }, error => {
        console.log(result)
        console.error('Erro ao criar Professor:', error);
      });
    });
  }

  editElement(element: ProfessorElement): void{
    console.log(element)
    this.openDialog(element);
  }

  deleteElement(position: number): void{
    this.professorElementService.deleteProfessores(position)
      .subscribe(() => {
                this.dataSource = this.dataSource.filter(p => p.id !== position)
      })

  }
}