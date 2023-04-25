import { Presence } from "src/presences/entities/presence.entity";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from "typeorm";

@Entity()
export class Professor {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeProfessor: string;

  @Column()
  email: string;

  @OneToMany(() => Presence, presence => presence.professor, {
    cascade: ['insert', 'update']
  })
  presences?: Presence[]
}