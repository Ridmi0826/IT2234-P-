const express=require('express')
const router = express.Router()
const Task = require('../models/Task')
const { mongoose } = require('mongoose')
const findFun = require('../services/genericFindService')


router.get('/',async (req,res)=>{
    findFun(res,Task)
})

router.get('/project/:pid/tasks', async (req, res) => {
    try {
        const pid = req.params;
        const results = await Task.find(
            { projectId: pid }
        )

        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No Data Found!")
        }
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error!")
    }
})

module.exports=router