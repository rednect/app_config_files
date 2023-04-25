import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Calling } from './entities/calling.entity';
import { DeepPartial, Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudent, StudentReturn } from './dto/student.dto';
import { StudentDetails } from './entities/student_details.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Calling)
    private readonly callingRepository: Repository<Calling>,

    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,

    @InjectRepository(StudentDetails)
    private readonly studentsDetailsRepository: Repository<StudentDetails>,
  ) { }

  async getAll(): Promise<StudentReturn[]> {
    let students: StudentReturn[] | any = await this.studentsRepository.find({
      relations: ['student_details', 'presences']
    });

    if (students.length) return students;

    throw new HttpException({
      msg: "No User was Found",
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

    student.student_details = studentDetails;

    return await this.studentsRepository.save(student);
  }
}
