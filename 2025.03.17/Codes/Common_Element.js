//Find common element in the A,B
console.log("---common element in the A,B array---")
let A = [4,5,6,3,7]
let B = [8,3,2,1,5]


console.log("---Using For Loop---")
for(let i=0; i< A.length; i++)
{
	for(let j=0; j< B.length; j++)
	{
		if(A[i]==B[j])
			console.log(A[i]);
	}
}



console.log("---Using ForEach Loop---")
A.forEach((p)=>
{
	B.forEach((q)=>
	{
			if(p==q)
				console.log(p)
	})
})
