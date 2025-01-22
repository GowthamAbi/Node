require('dotenv').config()
 const MongoDB_URL=process.env.MONOGODB_URL
 const PORT=process.env.PORT
 module.exports={
    MongoDB_URL,PORT
 }