import { Schedule } from "src/presences/entities/schedule.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("Professores")
export class Professor {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_professor: string;

  @Column()
  tia: string;

  @OneToMany(()=> Schedule, relacao => relacao.professors, {cascade: [ 'insert', 'update' ]})
  aulas: Schedule []

}