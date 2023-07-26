// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmallest=(array)=>{
const newArray=array.sort((a,b)=>a-b);
const secondSmallElemnt=newArray[1]
console.log(secondSmallElemnt)
}

const numbers=[25,30,20,60,50,40]
secondSmallest(numbers)