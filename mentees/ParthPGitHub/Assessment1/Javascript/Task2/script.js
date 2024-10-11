// Function to perform operations on two numbers
const operateNumbers = (num1, num2) => {
    // Arithmetic Operations
    const sum = num1 + num2;
    const difference = num1 - num2;

    // Comparison Operations
    const areEqual = num1 === num2;

    // Logical Operations
    const bothGreaterThanZero = num1 > 0 && num2 > 0; // Check if both numbers are greater than zero

    // Log the results
    console.log(`Sum: ${sum}`);
    console.log(`Difference: ${difference}`);
    console.log(`Are the two numbers equal? ${areEqual}`);
    console.log(`Are both numbers greater than zero? ${bothGreaterThanZero}`);
};

// Example usage
operateNumbers(10, 5); // You can change the numbers to test different scenarios