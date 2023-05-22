import { Body, Controller, Get, Post, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProfessorsService } from './professors.service';

@Controller('professors')
export class ProfessorsController {
  constructor(private readonly professorsService: ProfessorsService) {}

  @Get()
  findAll() {
    return this.professorsService.findAll();
  }

  @Post()
  create(@Body() body: Body, @Param('tia') tia:string) {
    return this.professorsService.create(tia, body);
  }

  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.professorsService.findOne(+id);
  }

  @Put('/update/:userId')
  update(@Param('userId') userId:number, @Body() body: Body) {
    return this.professorsService.update(+userId, body);
  }

  @Delete(':id')
  remove(@Param('id') id:string) {
    return this.professorsService.remove(+id);
  }

}
