import { DeepPartial } from 'typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Presence } from './entities/presence.entity';
import { Professor } from 'src/professors/entities/professor.entity';
import { CreatePresence } from './dto/presence.dto';
import { Student } from 'src/students/entities/student.entity';

@Injectable()
export class PresencesService {
  constructor(
    @InjectRepository(Presence)
    private readonly presenceRepository: Repository<Presence>,
    @InjectRepository(Professor)
    private readonly professorRepository: Repository<Professor>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>
  ) { }

  async getAll(): Promise<CreatePresence[]> {
    let presences = await this.presenceRepository.find({ 
      relations: [
        'professor', 
        'student',
        'student.class',
        'student.student_details'
      ] 
    });

    if (presences) return presences;

    throw new HttpException({
      msg: "No presence was found",
      error: "Not Found"
    }, HttpStatus.NOT_FOUND);
  }

  async create(body: CreatePresence): Promise<CreatePresence> {
    const { idProfessor, idAluno } = body;

    let newPresence = await this.presenceRepository.save(
      this.presenceRepository.create(body as DeepPartial<Presence>)
    );

    let professor = await this.professorRepository.findOne({where: {
      id: idProfessor
    }});

    let student = await this.studentRepository.findOne({where: {
      id: idAluno
    }, relations: ['student_details', 'class']});

    if (idProfessor && professor && idAluno && student) { 
      newPresence.professor = professor;
      newPresence.student = student;
      
      return await this.presenceRepository.save(newPresence);
    }
  }
}
