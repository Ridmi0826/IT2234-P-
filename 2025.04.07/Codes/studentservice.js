const students = require('./studentdb')

function getstudents(){
    return students;
}

function getStudent(id){
    return students.find((student)=>student.regno==id)
}

function getBygender(gender){
    return students.filter((student)=>student.gender==gender)
}

function getBycourse(course){
    return students.filter((student)=>student.course==course)
}

module.exports={getStudent,getstudents,getBygender,getBycourse}