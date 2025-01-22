const express=require('express')
const logger = require('./utils/logger')
const errorRouter = require('./utils/errorRouter')

const app=express()

app.use(logger)
app.use(express.json())
app.get('/',(response,request)=>{
    console.log({message:"GET"})
})

app.use(errorRouter)

module.exports=app