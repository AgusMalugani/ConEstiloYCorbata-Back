import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "proyecto_M3", //falta crear la bd
    //dropSchema:true,
    synchronize: true,
    entities: ["src/entity/*.js"],
    logging: true,
})
