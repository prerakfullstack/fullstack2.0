function performOperations(num1, num2) {
   
    const sum = num1 + num2;

 
    const difference = num1 - num2;

    
    const areEqual = num1 === num2;

    const areBothPositive = num1 > 0 && num2 > 0;

    console.log("Sum of the numbers:", sum);
    console.log("Difference (num1 - num2):", difference);
    console.log("Are the two numbers equal?", areEqual);
    console.log("Are both numbers greater than zero?", areBothPositive);
}


performOperations(10, 5);
