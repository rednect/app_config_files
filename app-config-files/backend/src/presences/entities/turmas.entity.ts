import { Student } from "src/students/entities/student.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Schedule } from "./schedule.entity";
  
  @Entity("Turmas")
  export class Turma {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome_turma: string;

    @OneToMany(() => Student, (student) => student.turma)
    student: Student[]

    @OneToMany(() => Schedule, (schedule) => schedule.turma)
    @JoinTable()
    schedule: Schedule[];

  }