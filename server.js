const express = require('express')


const app = express()

const dbConfig = require("./db");

const usersRoute = require('./routes/usersRoute')

app.use(express.json())


app.use('/api/users' , usersRoute)


const port = process.env.port||5000

app.listen(port , ()=>console.log(`server running on port ${port} with nodemon`))