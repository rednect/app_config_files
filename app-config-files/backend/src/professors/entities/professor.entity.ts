import { ClassEntity } from "src/classes/entities/class.entity";
import { Presence } from "src/presences/entities/presence.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable
} from "typeorm";

@Entity()
export class Professor {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeProfessor: string;

  @Column()
  tia: string;

  @Column()
  course_name: string;

  @OneToMany(() => Presence, presence => presence.professor, {
    cascade: ['insert', 'update']
  })
  presences?: Presence[];

  @ManyToMany(() => ClassEntity, (classes) => classes.professors)
  @JoinTable()
  classes?: ClassEntity[];
  // @ManyToOne(() => ClassEntity, (classes) => classes.professors, {
  //   cascade: true, 
  //   onDelete: "SET NULL"
  // })
  // class: ClassEntity;
}
