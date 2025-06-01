import express, { Request, Response } from 'express'
import { AppDataSource } from './config/typeOrm.config'
import * as dotenv from "dotenv";
import router from './routes/index.routes';
dotenv.config();

const app = express()
const port = process.env.BACK_PORT || 3000
app.use(express.json())
app.use(router)



AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
