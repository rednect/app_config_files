import { UsersController } from "./users/users.controller";
import { elephantconfig } from "./configs/elephant.config";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';
import { ProfessorsModule } from "./professors/professors.module";
import { ProfessorsController } from "./professors/professors.controller";
import { mysqlconfig } from "./configs/mysql.config";

@Module({

  imports: [TypeOrmModule.forRoot({
    /*name: elephantconfig.name,
    type: "postgres",
    url: elephantconfig.url,
    synchronize: elephantconfig.synchronize,
    logging: elephantconfig.logging,
    entities: elephantconfig.entities,*/
    type: 'mysql',
    host: mysqlconfig.host,
    port: mysqlconfig.port,
    username: mysqlconfig.username,
    password: mysqlconfig.password,
    database: mysqlconfig.database,
    entities: mysqlconfig.entities,
    synchronize: mysqlconfig.synchronize,
  }), UsersModule, StudentsModule, ProfessorsModule],

  controllers: [AppController, StudentsController, UsersController, ProfessorsController],

  providers: [AppService],

})

export class AppModule {}