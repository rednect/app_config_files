import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudent } from './dto/student.dto';

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

  @Get('/all')
  findAll() {
    return this.studentsService.findAll();
  }

  @Put('update/:id')
  update(@Param('id') id: number, @Body() updates: Partial<CreateStudent>) {
    return this.studentsService.update(id, updates);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.deleteStudent(+id);
  }

}
