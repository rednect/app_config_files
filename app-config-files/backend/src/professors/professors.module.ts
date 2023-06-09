import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { ProfessorsController } from './professors.controller';
import { Professor } from './entities/professor.entity';
import { ClassEntity } from 'src/classes/entities/class.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Professor,
      ClassEntity
    ])
  ],
  controllers: [ProfessorsController],
  providers: [ProfessorsService]
})
export class ProfessorsModule {}
