import * as dotenv from "dotenv";

dotenv.config();

export const elephantconfig = {
    "name": "default",
    "type": "postgres",
    "url": "postgres://qopxrqms:m7QHznAwLBaWVRKpwYLrCwz-FZLDlhtN@babar.db.elephantsql.com/qopxrqms", 
    "synchronize": true,
    "logging": true,
    "entities": ["src/entity/*.*"],
    "migrations": ["src/migrations/**/*.ts"],
  } 