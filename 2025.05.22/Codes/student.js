//many to many - a student can follow many courses, course can have many students
const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    age:{type:Number,require:true},
    degreeId:{
        type:String,
        require:true,
        ref:'degrees' //collection name
    },
    enroled_courses:[{type:mongoose.Types.ObjectId,ref:'courses'}]

})

const Student = mongoose.model('students',studentSchema)
const kevin = new Student({
    _id:'2021ict01',
    name:'Kevin',
    age:24,
    degreeId:'FAS2021IT',
    enroled_courses:['682ebd239c53dd68004a165f','682ebd4defa6c2c278a91baa']
})
//kevin.save()
module.exports = Student