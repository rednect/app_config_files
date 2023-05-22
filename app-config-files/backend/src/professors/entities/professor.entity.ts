import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Professores")
export class Professor {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_professor: string;

  @Column()
  sobrenome_professor: string;

  @Column()
  tia: string;

}