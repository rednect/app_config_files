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
  data: Date;

  @Column({ type: 'bool', default: true })
  presenca: boolean;

  @ManyToOne(() => Student, (student) => student.presences, {
    cascade: true,
    onDelete: "SET NULL"
  })
  student: Student
}