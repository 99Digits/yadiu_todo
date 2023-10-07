require('dotenv').config()
require('./db/connection')
 const router=require('./router/router')
const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')


const server=express()
server.use(cors())


server.use(express.json())
server.use(bodyparser.json())
 server.use(router)

PORT=4000 || process.env
server.listen(PORT,()=>{
    console.log(`server is listening to port ${PORT}`);
})