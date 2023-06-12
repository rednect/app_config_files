import * as dotenv from "dotenv";

dotenv.config();

export const elephantconfig = {
  "name": "default",
  "type": "postgres",
  "url": "postgres://xozfvzyv:7TJ64Sw5pkhsKyFOjUeqNm6fKl84Lglj@silly.db.elephantsql.com/xozfvzyv", 
  "synchronize": true,
  "logging": true,
  "entities": [__dirname + '/../**/*.entity.{js,ts}'],
} 