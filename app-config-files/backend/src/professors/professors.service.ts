import { DeepPartial } from 'typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Professor } from './entities/professor.entity';
import { CreateProfessor, UpdateProfessor } from './dto/professor.dto';
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
    const { tia } = body;

    let professor = await this.professorRepository.findOne({
      where: {
        tia: tia
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

  async update(id: number, body: UpdateProfessor): Promise<Professor> {  
    let professor = await this.professorRepository.findOne({where: {id: id}});
    if (!professor) {
      throw new HttpException({
        msg: 'Professor not found',
        error: 'Not Found'
      }, HttpStatus.NOT_FOUND);
    }
    let updatedProfessor = { ...professor, ...body };
    let updatedClasses = await this.classesRepository.find({
      where: {
        course_name: updatedProfessor.course_name
      }
    });
    
    if (!updatedClasses) {
      throw new HttpException({
        msg: 'Classes not found',
        error: 'Not Found'
      }, HttpStatus.NOT_FOUND);
    }
    updatedProfessor.classes = updatedClasses;
    await this.professorRepository.save(updatedProfessor);
    return updatedProfessor;
  }  

  async delete(id: number) {
    let professor = await this.professorRepository.findOne({where: {id: id}, relations: ['classes']});
    if (!professor) {
      throw new HttpException({
        msg: 'Professor not found',
        error: 'Not Found'
      }, HttpStatus.NOT_FOUND);
    } 
    await this.professorRepository.delete(id)
  }

}
