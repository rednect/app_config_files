import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { CreateProfessor, UpdateProfessor } from './dto/professor.dto';

@Controller('professors')
export class ProfessorsController {
  constructor(private readonly professorsService: ProfessorsService) {}

  @Get()
  getAll() {
    return this.professorsService.getAll();
  }

  @Post('create')
  create(@Body() body: CreateProfessor) {
    return this.professorsService.create(body);
  }

  @Put('update/:id')
  async updateProfessor(@Param('id') id: number, @Body() body: UpdateProfessor) {
    return this.professorsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.professorsService.delete(+id);
  }

}
