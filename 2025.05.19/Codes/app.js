const express = require('express');
const app =express();
const port=3003;
const mongoose = require('mongoose')
const coursert= require('./routes/courseRoute')
const studentrt= require('./routes/studentRoute')
const degreert= require('./routes/degreeRoute')

app.use(express.json())
app.use('/Course',coursert)
app.use('/Student',studentrt)
app.use('/Degree',degreert)
mongoose.connect('mongodb://localhost:27017/studentinfoDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})