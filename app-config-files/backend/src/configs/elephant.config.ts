import * as dotenv from "dotenv";

dotenv.config();

export const elephantconfig = {
  "name": "default",
  "type": "postgres",
  "url": "postgres://bvhcvdsx:KiWVL5GMzUiMXQqDMQ1_AQjsrB7DPVak@silly.db.elephantsql.com/bvhcvdsx", 
  "synchronize": true,
  "logging": true,
  "entities": [__dirname + '/../**/*.entity.{js,ts}'],
} 