import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  OneToMany,
  ManyToOne
} from "typeorm";
import { StudentDetails } from "./student_details.entity";
import { Calling } from "./calling.entity";
import { Presence } from "src/presences/entities/presence.entity";
import { ClassEntity } from "src/classes/entities/class.entity";

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
  
  @ManyToOne(() => ClassEntity, (classes) => classes.students, {
    cascade: true, 
    onDelete: "SET NULL"
  })
  class: ClassEntity

  @OneToOne(() => StudentDetails)
  @JoinColumn()
  student_details: StudentDetails;

  @ManyToMany(() => Calling)
  @JoinColumn()
  callings: Calling[];
}
