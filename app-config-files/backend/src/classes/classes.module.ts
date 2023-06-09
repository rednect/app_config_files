import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassEntity } from './entities/class.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ClassEntity
    ])
  ],
  controllers: [ClassesController],
  providers: [ClassesService]
})
export class ClassesModule {}
