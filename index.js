import express from 'express'
import userRoute from './routes/userRoute.js'
import {PostgresConnection} from './config/postgres.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(express.json());

await PostgresConnection()

app.use('/user',userRoute)

app.listen(3000,()=>{console.log("Server running successfully...")})
