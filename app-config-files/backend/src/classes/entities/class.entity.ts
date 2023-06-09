import { Professor } from "src/professors/entities/professor.entity";
import { Student } from "src/students/entities/student.entity";
import { 
  Column, 
  Entity, 
  JoinTable,
  ManyToMany, 
  OneToMany, 
  PrimaryGeneratedColumn 
} from "typeorm";

@Entity('classes')
export class ClassEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  course_name: string;

  @Column()
  class_name: string;

  @OneToMany(() => Student, student => student.class, {
    cascade: ['insert', 'update']
  })
  students?: Student[];

  @ManyToMany(() => Professor, (professors) => professors.classes)
  @JoinTable()
  professors?: Professor[];

}