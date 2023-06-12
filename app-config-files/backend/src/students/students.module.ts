import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentDetails } from './entities/student_details.entity';
import { ClassEntity } from 'src/classes/entities/class.entity';
import { Presence } from 'src/presences/entities/presence.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Student, 
    StudentDetails,
    ClassEntity,
    Presence
  ])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
