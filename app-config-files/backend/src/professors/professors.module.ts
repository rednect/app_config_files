import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { ProfessorsController } from './professors.controller';
import { Professor } from './entities/professor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Professor])],
  controllers: [ProfessorsController],
  providers: [ProfessorsService],
  exports: [ProfessorsService]
})

export class ProfessorsModule {}