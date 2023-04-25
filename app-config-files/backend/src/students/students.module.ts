import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calling } from './entities/calling.entity';
import { Student } from './entities/student.entity';
import { StudentDetails } from './entities/student_details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Calling, 
    Student, 
    StudentDetails
  ])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
