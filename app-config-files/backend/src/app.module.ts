import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { elephantconfig } from "./configs/elephant.config";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProfessorsModule } from './professors/professors.module';
import { PresencesModule } from './presences/presences.module';
import { StudentsModule } from './students/students.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    name: elephantconfig.name,
    type: "postgres",
    url: elephantconfig.url,
    synchronize: elephantconfig.synchronize,
    logging: elephantconfig.logging,
    entities: elephantconfig.entities}),
    UsersModule,
    AuthModule,
    ProfessorsModule,
    PresencesModule,
    StudentsModule,
    ClassesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
