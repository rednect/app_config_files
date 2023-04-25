import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { CreateProfessor } from './dto/professor.dto';

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
}
