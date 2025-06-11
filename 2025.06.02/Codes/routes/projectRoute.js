const express=require('express')
const router = express.Router()
const Project = require('../models/Project')
const { mongoose } = require('mongoose')
const findFun = require('../services/genericFindService')


router.get('/',async (req,res)=>{
    findFun(res,Project)
})

module.exports=router