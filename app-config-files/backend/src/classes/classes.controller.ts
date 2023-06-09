import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClass } from './dto/class.dto';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get('/getAll')
  async getAll() {
    return this.classesService.getAll();
  }

  @Post('/create')
  async create(@Body() body: CreateClass) {
    return this.classesService.create(body);
  }
}
