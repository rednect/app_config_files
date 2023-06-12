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
  displayedColumns: string[] = ['nome_aluno', 'tia', 'turma', 'acoes'];
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
        width: '250px',
        data: element === null ?{
          nome_aluno: '',
          tia: '',
          turma: null
        } : {
          id: element.id,
          nome: element.nome_aluno,
          tia: element.tia,
          turma: null
          // turma: element.turma
        }
      });
    
  
      // dialogRef.afterClosed().subscribe(result => {
      //   if(result !== undefined) {
      //     console.log(result);
      //     if (this.dataSource.map(p=> p.id).includes(result.id)) {
      //     this.dataSource.push(result);
      //     this.table.renderRows();
      //   } else {
      //     this.alunoElementService.createAlunos(result)
      //       .subscribe((data: AlunoElement) => {
      //         this.dataSource.push(result);
      //         this.table.renderRows();
      //       });
      //     }
      //   }
      // });
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

