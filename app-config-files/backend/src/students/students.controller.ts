import { Body, Controller, Post, Get } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudent } from './dto/student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getAll() {
    return this.studentsService.getAll();
  }

  @Post('create')
  create(@Body() body: CreateStudent) {
    return this.studentsService.create(body);
  }
}
