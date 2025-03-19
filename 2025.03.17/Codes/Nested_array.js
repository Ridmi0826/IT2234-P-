//print the nested array
//[[1,2,30],[5,6],[56,8,12]]

let array=[[1,2,30],[5,6],[56,8,12]]

array.forEach((n)=>{
	
	n.forEach((i)=>
	{
		console.log(i)
	})
})