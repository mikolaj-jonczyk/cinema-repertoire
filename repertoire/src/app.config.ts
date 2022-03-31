import * as dotenv from 'dotenv';

dotenv.config();

const Environment = {
  API_PORT: process.env.API_PORT || 300,
};

const Database = {
  HOST: process.env.DATABASE_HOST,
  PORT: process.env.DATABASE_PORT || 3306,
  USER: process.env.DATABASE_USER,
  NAME: process.env.DATABASE_NAME,
  PASSWORD: process.env.DATABASE_PASSWORD,
};

export const AppConfig = { Environment, Database };
