//arrow function
const msg = ()=>{console.log ("Hello JS")}
msg()

//write an arrow function to add 2 numbers

const add = (a,b)=>{return a+b}
console.log(add(4,5))


const mult = (a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(4))

 //Reset parameter
const mysum = (...n)=>{
	console.log(n)
}

mysum(4,5,6,89,2)

//method_01
const myadd1 = (...n)=>{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
myadd1(4,5,6,8,2)

//method_02
const myadd2 =(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(myadd2(4,5,6,8,2))

//callback function

const greet = (msg,fun)=>{
	console.log("Hi..."+msg)
	fun()
}
greet("Good morning",()=>{console.log("My name is David")})

const multtwo =(n)=>n*3

const myarry =(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}

myarry(multtwo,4,5,6,8,2)