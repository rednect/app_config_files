import { 
  Entity,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero_usuario: string;

  @Column({select: false})
  senha: string;

  @Column({type: 'bool', default: 0})
  estado_login: boolean;
}