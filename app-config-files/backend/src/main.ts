import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as ip from 'ip';
import * as dotenv from "dotenv";
import { consoleTableObj } from './utils/util';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const host = ip.address();
  const PORT = Number(process.env.PORT) || 3000;
  app.enableCors();
  app.listen(PORT).then(() => consoleTableObj({
    'Host': host,
    'Port': PORT
}));;
}
bootstrap();
