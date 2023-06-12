import { Body, Controller, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { PresencesService } from './preseces.service';

@Controller('presences')
export class PresencesController {
  constructor(private readonly presencesService: PresencesService) {};

  @Get()
  findAll() {
    return this.presencesService.findAll();
  }

  @Get('/aulas')
  findAllS() {
    return this.presencesService.findAllS();
  }

  @Get('/turmas')
  findAllT() {
    return this.presencesService.findAllT();
  }

  @Post()
  create(@Body() body: Body, @Param('userId') userId:number) {
    return this.presencesService.create(userId, body);
  }

  @Post('/criarAula')
  createS(@Body() body: Body, @Param('userId') userId:number) {
    return this.presencesService.createS(userId, body);
  }

  @Post('/criarTurma')
  createT(@Body() body: Body, @Param('userId') userId:number) {
    return this.presencesService.createT(userId, body);
  }

  @Get(':userId')
  findOne(@Param('userId') userId:string) {
    return this.presencesService.findOne(+userId);
  }

  @Get('/aulas/:userId')
  findOneS(@Param('userId') userId:string) {
    return this.presencesService.findOneS(+userId);
  }

  @Get('/turmas/:userId')
  findOneT(@Param('userId') userId:string) {
    return this.presencesService.findOneT(+userId);
  }

  @Put('/update/:userId')
  update(@Param('userId') userId:number, @Body() body: Body) {
    return this.presencesService.update(+userId, body);
  }

  @Put('/updateS/:userId')
  updateS(@Param('userId') userId:number, @Body() body: Body) {
    return this.presencesService.updateS(+userId, body);
  }

  @Put('/updateT/:userId')
  updateT(@Param('userId') userId:number, @Body() body: Body) {
    return this.presencesService.updateT(+userId, body);
  }

  @Delete(':userId')
  remove(@Param('userId') userId:string) {
    return this.presencesService.remove(+userId);
  }

  @Delete('/aulas/:userId')
  removeS(@Param('userId') userId:string) {
    return this.presencesService.removeS(+userId);
  }

  @Delete('/turma/:userId')
  removeT(@Param('userId') userId:string) {
    return this.presencesService.removeT(+userId);
  }

}


