import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
    OneToMany
  } from "typeorm";
  import { StudentDetails } from "./student_details.entity";
  import { Calling } from "./calling.entity";
  import { Presence } from "src/presences/entities/presence.entity";
  
  @Entity()
  export class Student {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome_aluno: string;
  
    @OneToMany(() => Presence, presence => presence.student,{
      cascade: ['insert', 'update']
    })
    presences: Presence[];
    
    @OneToOne(() => StudentDetails)
    @JoinColumn()
    student_details: StudentDetails;
  
    @ManyToMany(() => Calling)
    @JoinColumn()
    callings: Calling[]
  }
  