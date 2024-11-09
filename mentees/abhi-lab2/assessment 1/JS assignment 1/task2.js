function taskForOperators(num1, num2) {
    // Arithmetic operators
    const sum = num1 + num2;
    const difference = num1 - num2;

    // Comparison operator
    const areEqual = num1 === num2;

    // Logical operator
    const bothGreaterThanZero = num1 > 0 && num2 > 0;

    //res 
    console.log(`Input numbers: ${num1} and ${num2}`)
    console.log(`Sum: ${sum}`)
    console.log(`Difference (${num1} - ${num2}): ${difference}`)
    console.log(`Are the numbers same? ${areEqual}`)
    console.log(`Are both numbers greater than zero? ${bothGreaterThanZero}`)
}

// Test cases logs
console.log("Test case 1:")
taskForOperators(5, 3)

console.log("Test case 2:")
taskForOperators(10, 10)

console.log("Test case 3:");
taskForOperators(-2, 7);