const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const baseUrl = require('./baseUrl')
const connectDB = require('./config/db')
dotenv.config()

const corsOptions = {
    origin:`${baseUrl}`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
connectDB();
const PORT = process.env.PORT||5000
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))