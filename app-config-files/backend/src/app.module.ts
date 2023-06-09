import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mysqlConfig } from "./configs/mysql.config";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProfessorsModule } from './professors/professors.module';
import { PresencesModule } from './presences/presences.module';
import { StudentsModule } from './students/students.module';
import { ClassesModule } from './classes/classes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: mysqlConfig.host,
      port: mysqlConfig.port,
      username: mysqlConfig.username,
      password: mysqlConfig.password,
      database: mysqlConfig.database,
      synchronize: mysqlConfig.synchronize,
      entities: [__dirname + '/**/*.entity{.ts,.js}']
    }),
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
