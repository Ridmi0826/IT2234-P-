/* Syn
1
2
3

async
event driven and non I/O blocking program
1- read a fileasynpro.js
2- request data from an api from internet
3- print message
*/

const fs = require('fs');
fs.readFile('file.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);
        return 0;
    }
    console.log(data)
});

console.log("File reading is done...")

