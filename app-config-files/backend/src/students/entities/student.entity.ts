import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('Alunos')
export class Student {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_aluno: string;

  @Column()
  sobrenome_aluno: string;

  @Column()
  tia: string;

}
