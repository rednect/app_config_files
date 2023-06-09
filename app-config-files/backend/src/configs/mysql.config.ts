import * as dotenv from "dotenv";

dotenv.config();

export const mysqlConfig = {
  type: 'mysql',
  host: '0.0.0.0',
  username: 'root',
  password: '@Python123',
  port: 3306,
  database: 'mackenzieapi',
  synchronize: true  
};