import * as dotenv from "dotenv";

dotenv.config();

export const elephantconfig = {
  "name": "default",
  "type": "postgres",
  "url": "postgres://xdcxvpyh:PIRszQLhvYQrJ5gjcJtUC1lpWeo2GfXC@silly.db.elephantsql.com/xdcxvpyh", 
  "synchronize": true,
  "logging": true,
  "entities": [__dirname + '/../**/*.entity.{js,ts}'],
} 