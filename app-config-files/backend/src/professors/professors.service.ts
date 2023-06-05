import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable, Body } from '@nestjs/common';
import { Professor } from './entities/professor.entity';

@Injectable()
export class ProfessorsService {

  constructor(
    @InjectRepository(Professor)
    private professorRepository: Repository<Professor>,
  ) {}
  
  async findAll(): Promise<Professor[]> {
    let professors = await this.professorRepository.find({relations: []});
    return professors
  }

  async create(tia: string, body: any) {
    let professors = await this.professorRepository.findOne({where: {tia: body.tia}, relations: []});
    if (professors) {
      throw new HttpException('Professor já cadastrado', 406)
    } else {
      await this.professorRepository.save(this.professorRepository.create(body as DeepPartial<Professor>));
    }
  }

  async findOne(id: number): Promise<Professor> {
    let professors = await this.professorRepository.findOne({where: {id: id}, relations: []});
    return professors;
  }

  async update(userId:number, body:any) {
    let professors = await this.professorRepository.findOne({where: {id: userId}, relations:[]});
    if (professors) {
      professors = body
      return this.professorRepository.save(professors);
    }
  }

    async remove(userId: number) {
      let professors = await this.professorRepository.findOne({where: {id: userId}, relations: []});
      return this.professorRepository.delete(userId)
    }
    
}
