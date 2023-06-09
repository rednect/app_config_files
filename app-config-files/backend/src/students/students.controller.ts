import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudent, RegisterStudentInClass } from './dto/student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getAll() {
    return this.studentsService.getAll();
  }

  @Get('/getById/:id')
  getById(@Param('id') id: number) {
    return this.studentsService.getPresencesFromStudent(id);
  }

  @Post('create')
  create(@Body() body: CreateStudent) { 
    return this.studentsService.create(body);
  }
}
