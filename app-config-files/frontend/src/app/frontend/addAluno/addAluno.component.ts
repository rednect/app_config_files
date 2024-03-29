import { Component, ViewChild } from '@angular/core';
import { ElementFormsComponent } from '../element-forms/element-forms.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AlunoElement } from 'src/app/backend/model/alunoElement';
import { AlunoElementService } from 'src/app/services/alunoElement.service';

@Component({
  selector: 'app-home',
  templateUrl: './addAluno.component.html',
  styleUrls: ['./addAluno.component.scss'],
  providers: [AlunoElementService]
})
export class addAlunoComponent {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['nome_aluno', 'tia', 'turma', 'curso', 'acoes'];
  dataSource: AlunoElement[] = [];

  constructor(
    public dialog: MatDialog,
    public alunoElementService: AlunoElementService
    ) {
      this.alunoElementService.getAlunos()
        .subscribe((data: AlunoElement[]) => {
          console.log(data)
          this.dataSource = data;
        });
    }

    ngOnInit(): void {
    }

    openDialog(element: AlunoElement| null): void {
      const dialogRef = this.dialog.open(ElementFormsComponent, {
        width: '260px',
        data: element === null ?{
          nome_aluno: '',
          tia: '',
          sala_aluno: null,
          curso_aluno: ''
        } : {
          id: element.id,
          nome_aluno: element.nome_aluno,
          tia: element.tia,
          sala_aluno: element.sala_aluno,
          curso_aluno: element.curso_aluno
        }
      });
    
  
      dialogRef.afterClosed().subscribe(result => {
        this.alunoElementService.createAlunos(result)
          .subscribe((data:AlunoElement) => {

            this.dataSource.push(result);
            this.table.renderRows();
            window.location.reload();
          // Lidar com a resposta da requisição POST
          console.log('Aluno criado com sucesso!', result);
        }, error => {
          // Lidar com o erro da requisição POST
          console.log(result)
          console.error('Erro ao criar aluno:', error);
        });
      });
      
    }

      editElement(element: AlunoElement): void{
        console.log(element)
        this.openDialog(element);
      }

      deleteElement(position: number): void{
        this.alunoElementService.deleteAlunos(position)
          .subscribe(() => {
                    this.dataSource = this.dataSource.filter(p => p.id !== position)
          })

      }
    }

