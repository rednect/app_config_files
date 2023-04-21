import { AdminsController } from './admins/admins.controller';
import { AuthModule } from './auth/auth.module';
import { elephantconfig } from './elephant.confg';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './teachers/users.controller';
import { UsersModule } from './teachers/users.module';
import { AdminsModule } from './admins/admins.module';

@Module({

  imports: [TypeOrmModule.forRoot({
    name: elephantconfig.name,
    type: elephantconfig.type,
    url: elephantconfig.url,
    synchronize: elephantconfig.synchronize,
    logging: elephantconfig.logging,
    entities: elephantconfig.entities,
  }), UsersModule, AuthModule, AdminsModule],

  controllers: [AppController, UsersController, AdminsController],

  providers: [AppService],

})

export class AppModule {}
