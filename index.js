import express from 'express'
import userRoute from './routes/userRoute.js'
import PostgresConnection from './config/postgres.js'
const app = express()

PostgresConnection()

app.use('/user',userRoute)

app.listen(3000,()=>{console.log("Server running successfully...")})
