import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PresencesController } from './presences.controller';
import { PresencesService } from './preseces.service';
import { Presences } from './entities/presences.entity';
import { Schedule } from './entities/schedule.entity';
import { Turma } from './entities/turmas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Presences, Schedule, Turma])],
  controllers: [PresencesController],
  providers: [PresencesService],
  exports: [PresencesService]
})

export class PresencesModule {}
