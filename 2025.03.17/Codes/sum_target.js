//arr=[1,2,3,4,5,6]
//target=7
//Write a code find the all pairs that sum up to target

console.log("---print all the pairs sum upto 7---")
let arr=[1,2,3,4,5,6]

let target=7

for(let i=0;i<arr.length;i++)
{
	for(let j=0;j<arr.length;j++)
	{
		if(arr[i]+arr[j]==target)
		{
			console.log(arr[i]+","+arr[j])
		}
	}
}