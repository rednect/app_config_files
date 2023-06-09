import { ClassEntity } from "src/classes/entities/class.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from "typeorm";

@Entity()
export class StudentDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_aluno: string;

  @Column()
  curso_aluno: string;

  @Column()
  sala_aluno: string;

  @Column()
  frequencia_aluno: number;

}