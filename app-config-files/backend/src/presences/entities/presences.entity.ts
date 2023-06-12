import { Student } from "src/students/entities/student.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Schedule } from "./schedule.entity";
import { Turma } from "./turmas.entity";
  
  @Entity("Presencas")
  export class Presences {
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "timestamp" })
    data_presenca: Date;

    @OneToOne(() => Student)
    @JoinColumn()
    student: Student;

    @OneToOne(() => Schedule)
    @JoinColumn()
    schedule: Schedule;

    @OneToOne(() => Turma)
    @JoinColumn()
    turma: Turma;

  }