//write recursive function to print numbers from 1 to n
function recursiveNumber(a){
	if(a==0){
		return -1
	}
	else{
		console.log(a)
		recursiveNumber(a-1)
	}
}
recursiveNumber(8)