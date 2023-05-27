import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) { }

  async findAll(): Promise<Student[]> {
    let students = await this.studentsRepository.find({relations: []});
    return students
  }

  async create(tia: string, body: any) {
    let students = await this.studentsRepository.findOne({where: {tia: body.tia}});
    if (students) {
      await this.studentsRepository.save(this.studentsRepository.create(body as DeepPartial<Student>));
    } else {
      throw new HttpException('Aluno já cadastrado', 406)
    }
  }

  async findOne(id: number): Promise<Student> {
    let students = await this.studentsRepository.findOne({where: {id: id}, relations: []});
    return students;
  }

  async update(userId:number, body:any) {
    let students = await this.studentsRepository.findOne({where: {id: userId}, relations:[]});
    if (students) {
      students = body
      return this.studentsRepository.save(students);
    }
  }

    async remove(userId: number) {
      let students = await this.studentsRepository.findOne({where: {id: userId}, relations: []});
      return this.studentsRepository.delete(userId)
    }

}
