import { DeepPartial } from 'typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Professor } from './entities/professor.entity';
import { CreateProfessor } from './dto/professor.dto';

@Injectable()
export class ProfessorsService {

  constructor(
    @InjectRepository(Professor)
    private readonly professorRepository: Repository<Professor>
  ) {}
  
  async getAll() {
    let professors = await this.professorRepository.find();

    if(professors.length) return professors;

    throw new HttpException({
      msg: "No professor was found",
      error: "Not Found"
    }, HttpStatus.NOT_FOUND);
  }

  async create(body: CreateProfessor) {
    const { email } = body;

    let professor = await this.professorRepository.findOne({
      where: {
        email: email
      }
    });

    if(!professor) {
      return await this.professorRepository.save(
        this.professorRepository.create(body as DeepPartial<Professor>)
      );
    }

    throw new HttpException({
      msg: "Professor already exists",
      error: "Not acceptable"
    }, HttpStatus.NOT_ACCEPTABLE);
  }
}
