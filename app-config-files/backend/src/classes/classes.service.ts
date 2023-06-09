import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassEntity } from './entities/class.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateClass } from './dto/class.dto';

@Injectable()
export class ClassesService {

  constructor(
    @InjectRepository(ClassEntity)
    private readonly classEntityRepository: Repository<ClassEntity>
  ) {}


  async getAll(): Promise<ClassEntity[]> {
    let classes = await this.classEntityRepository.find({ 
      relations: [
        'students',
        'professors'
      ] 
    });

    if (classes) return classes;

    throw new HttpException({
      msg: "No presence was found",
      error: "Not Found"
    }, HttpStatus.NOT_FOUND);
  }

  async create(body: CreateClass) {
    const { class_name } = body;

    let classes = await this.classEntityRepository.findOne({
      where: {
        class_name
      }
    });

    if(!classes) {
      return await this.classEntityRepository.save(
        this.classEntityRepository.create(body as DeepPartial<ClassEntity>)
      );
    }

    throw new HttpException({
      msg: "Class already exists",
      error: "Not acceptable"
    }, HttpStatus.NOT_ACCEPTABLE);
  }
}
