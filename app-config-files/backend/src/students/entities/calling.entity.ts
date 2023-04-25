import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn
  } from "typeorm";
  
  @Entity()
  export class Calling {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    numero_servico: number;
  
    @CreateDateColumn()
    data_criacao: Date;
  
    @CreateDateColumn()
    data_execucao: Date;
  
    @Column()
    cpf_cliente: string;
  
    @Column()
    cpf_prestador: string;
  }