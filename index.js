import express from 'express'
const app = express()

app.get('/',(req, res)=>{res.send("Ok i'm fine")});
app.listen(3000,()=>{console.log("Server running successfully")})