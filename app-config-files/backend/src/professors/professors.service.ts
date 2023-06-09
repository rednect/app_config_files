import { DeepPartial } from 'typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Professor } from './entities/professor.entity';
import { CreateProfessor } from './dto/professor.dto';
import { ClassEntity } from 'src/classes/entities/class.entity';

@Injectable()
export class ProfessorsService {

  constructor(
    @InjectRepository(Professor)
    private readonly professorRepository: Repository<Professor>,

    @InjectRepository(ClassEntity)
    private readonly classesRepository: Repository<ClassEntity>
  ) {}
  
  async getAll() {
    let professors = await this.professorRepository.find({
      relations: [
        'classes'
      ]
    });

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
      let newProfessor = await this.professorRepository.save(
        this.professorRepository.create(body as DeepPartial<Professor>)
      );
      
      let classes = await this.classesRepository.find({
        where: {
          course_name: newProfessor.course_name
        }
      });

      newProfessor.classes = classes;

      await this.classesRepository.save(classes);

      return await this.professorRepository.save(newProfessor);
    }
    
    throw new HttpException({
      msg: "Professor already exists",
      error: "Not acceptable"
    }, HttpStatus.NOT_ACCEPTABLE);
  }

}
