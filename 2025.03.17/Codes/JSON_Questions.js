

//Define 10 students JSON
//Store it in an Array
let students=[
{regno:'2021/ICT/111',name:'David',age:21,gender:'Male',course:'IT',gpa:3.42},
{regno:'2021/ICT/112',name:'Anne',age:22,gender:'Female',course:'IT',gpa:3.35},
{regno:'2021/BIO/101',name:'Kavin',age:21,gender:'Male',course:'Bio',gpa:3.21},
{regno:'2021/BIO/104',name:'Rose',age:23,gender:'Female',course:'Bio',gpa:3.53},
{regno:'2021/ICT/123',name:'Liam',age:22,gender:'Male',course:'IT',gpa:3.59},
{regno:'2021/BIO/122',name:'Jonny',age:24,gender:'Male',course:'Bio',gpa:3.33},
{regno:'2021/BIO/33',name:'James',age:21,gender:'Male',course:'Bio',gpa:3.28},
{regno:'2021/AMC/54',name:'John',age:22,gender:'Male',course:'Maths',gpa:3.67},
{regno:'2021/AMC/02',name:'Olivia',age:22,gender:'Male',course:'Maths',gpa:3.15},
{regno:'2021/AMC/03',name:'Soni',age:23,gender:'Female',course:'Maths',gpa:2.76},
]


//Find the female students
let female_st = [];
for (let i=0;i<students.length;i++) {
    if (students[i].gender == 'Female') {
        female_st.push(students[i]);
    }
}
console.log("Female Students:", female_st);

//Find the students who are following IT course
let itStudent = [];
for (let j=0;j<students.length;j++) {
    if (students[j].course == 'IT') {
        itStudent.push(students[j]);
    }
}
console.log("IT Students:", itStudent);

//Find the max and average GPA among the students
let totalGPA = 0;
let maxGPA = students[0].gpa;

for (let k=0;k<students.length;k++) {
    totalGPA += students[k].gpa;
    if (students[k].gpa>maxGPA) {
        maxGPA = students[k].gpa;
    }
}

let avgGPA = totalGPA / students.length;
console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));
 