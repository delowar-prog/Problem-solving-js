// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const javaScriptCalculator=(num1,num2,operator)=>{
    let result;
    if(operator=='+'){
        result=num1+num2;
    }else if(operator=='-'){
        result=num1-num2;
    }else if(operator=='*'){
        result=num1*num2; 
    }else if(operator=='/'){
        result=num1/num2;  
    }else{
        result='please input a valid operator'
    }
    console.log(result)
}

javaScriptCalculator(50,20,'/')