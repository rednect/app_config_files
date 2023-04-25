import { Body, Controller, Get, Post } from '@nestjs/common';
import { PresencesService } from './presences.service';

@Controller('presences')
export class PresencesController {
  constructor(private readonly presencesService: PresencesService) {}

  @Get()
  getAll() {
    return this.presencesService.getAll();
  }

  @Post('create')
  create(@Body() body: any) {
    return this.presencesService.create(body);
  }
}
