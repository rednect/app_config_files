import { Body, Controller, Post, Get, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Post()
  create(@Body() body: Body, @Param('tia') tia:string) {
    return this.studentsService.create(tia, body);
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.studentsService.findOne(+id);
  }

  @Put('/update/:userId')
  update(@Param('userId') userId:number, @Body() body: Body) {
    return this.studentsService.update(+userId, body);
  }

  @Delete(':id')
  remove(@Param('id') id:string) {
    return this.studentsService.remove(+id);
  }

}


