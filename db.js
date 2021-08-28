const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology:true, useNewUrlParser:true})
var connection = mongoose.connection

  connection.on('error', ()=>{
      console.log("cannot connect to MongoDB")
  })

  connection.on('connected', ()=>{
      console.log('Connetion to MongoDB successful')
  })

  module.exports=mongoose