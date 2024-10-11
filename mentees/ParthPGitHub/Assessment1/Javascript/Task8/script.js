// 1. Create an array of numbers
const numbers = [49, 12, 63, 88, 25, 54, 39, 50];

// Sort the array in descending order
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log(`Sorted in Descending Order: ${sortedNumbers}`); // Logs the sorted array

// Filter out numbers greater than 50
const filteredNumbers = sortedNumbers.filter(num => num >= 50);
console.log(`Filtered Numbers (>= 50): ${filteredNumbers}`); // Logs the filtered array

// Find the sum of all numbers using the reduce method
const sum = filteredNumbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(`Sum of Filtered Numbers: ${sum}`); // Logs the sum

// 2. Use built-in methods to round, ceil, and floor a decimal number
const decimalNumber = 36.36;

const rounded = Math.round(decimalNumber);
const ceiled = Math.ceil(decimalNumber);
const floored = Math.floor(decimalNumber);

console.log(`Original Number: ${decimalNumber}`);
console.log(`Rounded: ${rounded}`);
console.log(`Ceiled: ${ceiled}`);
console.log(`Floored: ${floored}`);