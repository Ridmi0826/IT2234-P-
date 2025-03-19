console.log("---Print numbers in a array---")

let numArray=[2,4,6,8,10,]
console.log("Array:"+numArray)

//using for loop

console.log("---Using for loop---")
for(let i=0;i<numArray.length;i++)
{
console.log(numArray[i])
}

//using foreach loop

console.log("---Using foreach loop---")
numArray.forEach((n)=>{
	console.log(n)
})

//Find the maximum number
console.log("------ Find MAX number from array using foreach----- ")
	 let max=0;

numArray.forEach((n)=>{

	if(max<n)
	{
		max=n
	}
	
	 
})
console.log("Maximum Number: "+max)
	
	


let array = [[1,2,3],[4,5],[6,7,8]]


console.log("---2D Array Display using ForLoop---")
	for(let i=0; i<array.length; i++)
		for(let j=i; j<array.length;j++)
			{
				console.log(array[i,j]);
			}
			
	console.log("\n") 
	

console.log("---2D Array Display using ForEach---")
	array.forEach((n)=>
	{
		n.forEach((m)=>
		{
			console.log(m)
		}
		)
		
	}
	)
