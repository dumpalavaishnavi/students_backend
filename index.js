require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const studentRoutes = require('./routes/students.routes')


const app = express()
app.use(express.json())

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log('Connected to datasbe succesfully')
        app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))
    })
    .catch((err)=>console.log(err.message))

app.use('/api/students',studentRoutes)
