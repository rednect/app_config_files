import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Turma } from "./turmas.entity";
import { Professor } from "src/professors/entities/professor.entity";
  
  @Entity("Aulas")
  export class Schedule {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome_materia: string;

    @Column({ type: "timestamp" })
    hora_inicio: Date;

    @Column({ type: "timestamp" })
    hora_fim: Date;

    @Column()
    dia_da_semana: string;

    @ManyToOne(() => Turma, (turma) => turma.schedule)
    turma: Turma[]

    @ManyToOne(() => Professor, (professor) => professor.schedule)
    professor: Professor;

  }