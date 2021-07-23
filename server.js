const express = require('express')


const app = express()

const dbConfig = require("./db");
const roomRoute = require("./routes/roomsRoute");

app.use('/api/rooms' , roomRoute)

const port = process.env.port||5000

app.listen(port , ()=>console.log(`server running on port ${port} with nodemon`))