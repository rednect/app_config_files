import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudent, StudentReturn } from './dto/student.dto';
import { StudentDetails } from './entities/student_details.entity';
import { ClassEntity } from 'src/classes/entities/class.entity';
import { Presence } from 'src/presences/entities/presence.entity';
import { measureMemory } from 'vm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,

    @InjectRepository(StudentDetails)
    private readonly studentsDetailsRepository: Repository<StudentDetails>,

    @InjectRepository(ClassEntity)
    private readonly classesRepository: Repository<ClassEntity>,

    @InjectRepository(Presence)
    private readonly presenceRepository: Repository<Presence>
  ) { }

  async findAll(): Promise<StudentDetails[]> {
    let student = await this.studentsDetailsRepository.find();
    return student;
  }

  async getAll(): Promise<StudentReturn[]> {
    let student: StudentReturn[] | any = await this.studentsRepository.find({
      relations: [
        'student_details',
        'class', 
        'presences'
      ]
    });

    if (student.length) return student;

    throw new HttpException({
      msg: "No Student was Found",
      error: "Not Found"
    }, HttpStatus.NOT_FOUND);
  }

  async create(body: CreateStudent) {

    let studentDetails = await this.studentsDetailsRepository.save(
      this.studentsDetailsRepository.create(body as DeepPartial<StudentDetails>)
    );
    let student = await this.studentsRepository.save(
      this.studentsRepository.create(body as DeepPartial<Student>)
    );
    
    let classes = await this.classesRepository.findOne({
      where: {
        class_name: studentDetails.sala_aluno
      }
    });

    student.student_details = studentDetails;
    student.class = classes;

    return await this.studentsRepository.save(student);
  }


  async getPresencesFromStudent(id: number) {

    let student = await this.presenceRepository.find({
      where: {
        idAluno: id
      }
    });

    if(student.length) return student; 

    throw new HttpException({
      msg: "No Student was Found",
      error: "Not Found"
    }, HttpStatus.NOT_FOUND);
  }

  async update(id: number, updates: Partial<CreateStudent>): Promise<StudentReturn> {
    let student = await this.studentsRepository.findOne({where: {id: id}, relations: ['student_details', 'classes', 'presences']});
    if (!student) {
      throw new HttpException({
        msg: 'Student not found',
        error: 'Not Found'
      }, HttpStatus.NOT_FOUND);
    }  

    let updatedStudentDetails = Object.assign(student.student_details, updates);
    await this.studentsDetailsRepository.save(updatedStudentDetails);
    if (updates.sala_aluno) {
      const classes = await this.classesRepository.findOne({
        where: {
          class_name: updates.sala_aluno
        }
      });
      if (!classes) {
        throw new HttpException({
          msg: 'Class not found',
          error: 'Not Found'
        }, HttpStatus.NOT_FOUND);
      }
      student.class = classes;
    }
  
    let updatedStudent = Object.assign(student, { student_details: updatedStudentDetails }, updates);
    await this.studentsRepository.save(updatedStudent);
    return updatedStudent;
  }

  async deleteStudent(id: number) {
    let student = await this.studentsRepository.findOne({where: {id: id}, relations: ['student_details', 'class', 'presences']});

    if (!student) {
      throw new HttpException({
        msg: 'Student not found',
        error: 'Not Found'
      }, HttpStatus.NOT_FOUND);
    } 
    await this.presenceRepository.delete(id)
    await this.studentsRepository.delete(id);
    await this.studentsDetailsRepository.delete(id);
  }
  
}


