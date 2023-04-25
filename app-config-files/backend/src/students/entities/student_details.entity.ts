import {
    Entity,
    Column,
    PrimaryGeneratedColumn
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
    frequencia_aluno: number
  }