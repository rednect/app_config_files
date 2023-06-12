import { Student } from "src/students/entities/student.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Schedule } from "./schedule.entity";
  
  @Entity("Turmas")
  export class Turma {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome_turma: string;

    @OneToMany(()=> Student, relacao => relacao.turmas, {cascade: [ 'insert', 'update' ]})
    alunos: Student []

    @OneToMany(()=> Schedule, relacao1 => relacao1.turmas, {cascade: [ 'insert', 'update' ]})
    aulas: Schedule []   

  }