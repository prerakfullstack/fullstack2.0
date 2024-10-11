// 1. Function that takes an object and deconstructs its properties
const logPersonDetails = ({ firstName, lastName, age }) => {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
};

// Example usage of logPersonDetails
const person = {
    firstName: 'Test',
    lastName: 'User',
    age: 30
};

logPersonDetails(person);

// 2. Function that accepts an array of three numbers and returns the sum using array deconstruction
const sumOfNumbers = ([num1, num2, num3]) => {
    return num1 + num2 + num3;
};

// Example usage of sumOfNumbers
const numbers = [5, 10, 15];
const totalSum = sumOfNumbers(numbers); // Returns 30
console.log(`Sum of numbers: ${totalSum}`); // Logs: Sum of numbers: 30