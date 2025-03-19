
console.log("---push and pop elements in the array---")

arr=['a','b','d']
console.log(arr)

console.log("---push c---") 

arr.push('c')
console.log(arr)

console.log("---pop an element---")

arr.pop()
console.log(arr)

//reverse the array using push and pop
//a b c d -> d c b a 

console.log("---reverse the elements in the array---")

let arr1=['a','b','c','d']

let arr2=[]
for(let i=arr1.length;i>0;i--)
{
   arr2.push(arr1.pop())
}
console.log(arr2)
