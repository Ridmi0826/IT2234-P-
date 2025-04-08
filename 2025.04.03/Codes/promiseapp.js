/* promise
is object from a operation
mention the status of the operation

3 states:-
    1. waiting / pending
    2. fullfiled / resolved - done
    3. rejected / error
*/

const fs = require('fs').promises;

const readFile = (filepath) =>{
    return fs.readFile('file.txt','utf8') //return a promise //file1.txt 
}

readFile('file.txt').then((data)=>{
    console.log(data)
})

.catch((err)=>{
    console.error(err);
})