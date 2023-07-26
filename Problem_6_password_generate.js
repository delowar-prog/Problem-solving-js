// Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatePassword=(passwordLength)=>{
    const chars=`0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    let generatepass=''
    for(let i=0; i<=passwordLength; i++){
        let random=Math.floor(Math.random()*chars.length)
        generatepass+=chars.substring(random, random+1)
        
    }
    console.log(generatepass)
}

generatePassword(30)