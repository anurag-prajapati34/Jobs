const express =require('express');
const mongoose =require('mongoose');
const connectDB = require('./config/db');
const jobRoutes= require('./routes/jobRoutes')
const cors =require('cors')
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json())

//connect mongodb
connectDB();

//routes
app.use('/api/jobs',jobRoutes);

//PORT
const PORT=process.env.PORT||8000

//Starting server
app.listen(PORT,()=>console.log("SERVER STARTED AT PROT =>",PORT));