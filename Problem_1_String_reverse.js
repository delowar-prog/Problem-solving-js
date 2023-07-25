// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const resersedString=(str)=>{
    let reverseStr=[]
    for(let i=str.length-1; i>=0; i--){
        reverseStr.push(str[i])
    }
    return reverseStr.join('')
}


const string='Hello Bangladesh'

console.log(resersedString(string))