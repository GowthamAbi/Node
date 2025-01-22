const express=require('express')
const jobController = require('../controller/jobController')

const jobRouter=express()

jobRouter.get('/',jobController.getJobs)
jobRouter.post('/',jobController.createJobs)

module.exports=jobRouter