import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();


export const AppDataSource = new DataSource({
    type: "postgres",
      host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
     //dropSchema:true,
    synchronize: true,  
 entities: ['dist/**/*.entity.js'],
    logging: true,
    ssl: {
    rejectUnauthorized: false // importante para evitar error de certificados autofirmados
  },
})
