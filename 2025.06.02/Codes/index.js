const express = require('express');
const index =express();
const port=3001;
const mongoose = require('mongoose')
const errorHandleMid=require('./middlewares/errorHandling')

const userrt= require('./routes/userRoute')
const projectrt= require('./routes/projectRoute')
const taskrt= require('./routes/taskRoute')

index.use(express.json())
index.use(errorHandleMid)
index.use('/User',userrt)
index.use('/Project',projectrt)
index.use('/Task',taskrt)


mongoose.connect('mongodb://localhost:27017/userinfoDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

index.listen(port,()=>{
    console.log(`server is running on ${port}`);
})