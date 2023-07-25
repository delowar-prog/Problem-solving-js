// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const addPositiveNumber=array=>{
    let total=0;
    for(let i=0; i<array.length; i++){
        if(array[i]>0){
            total=total+array[i]
        }
    }
    console.log(total)
}

const arr=[2, 5, 10, -3, -7]
addPositiveNumber(arr)