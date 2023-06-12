import { Turma } from "src/presences/entities/turmas.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity('Alunos')
export class Student {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_aluno: string;

  @Column()
  tia: string;

  @ManyToOne(() => Turma, turma => turma.alunos, {cascade: true, onDelete: 'CASCADE'})
  turmas: Turma 

}
