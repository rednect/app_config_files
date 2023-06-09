import { Professor } from "src/professors/entities/professor.entity";
import { Student } from "src/students/entities/student.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";

@Entity()
export class Presence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idAluno: number;

  @Column()
  numero_da_aula: number;

  @Column({ type: 'bool', default: 0 })
  presenca: boolean;

  @ManyToOne(() => Professor, (professor) => professor.presences, {
    cascade: true,
    onDelete: "SET NULL"
  })
  professor: Professor

  @ManyToOne(() => Student, (student) => student.presences, {
    cascade: true,
    onDelete: "SET NULL"
  })
  student: Student
}