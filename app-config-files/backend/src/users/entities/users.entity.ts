import { BeforeInsert, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
  
  @Entity("Administradores")
  export class User {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    email: string;
  
    @Column({select: false})
    senha: string;
  
    @Column({select: false})
    confSenha: string;

    @BeforeInsert()
    async hashPassword() {
      this.senha = await bcrypt.hash(this.senha, 16)
      this.confSenha = await bcrypt.hash(this.confSenha, 16)
    }
  }