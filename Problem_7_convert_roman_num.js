
// Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInteger=(romanString)=>{
    const  romanNumerals = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
    let integerValue = 0;
    let prevValue = 0;

    for (let i = romanString.length - 1; i >= 0; i--) {
        const numeral = romanString[i];
        const currentValue = romanNumerals[numeral];
        
        if (currentValue >= prevValue) {
          integerValue += currentValue;
        } else {
          integerValue -= currentValue;
        }
    
        prevValue = currentValue;
      }
    
      return integerValue;
}


console.log(romanToInteger("IX"))