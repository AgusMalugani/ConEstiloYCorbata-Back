import express, { Request, Response } from 'express'
import { AppDataSource } from './config/typeOrm.config'
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

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
