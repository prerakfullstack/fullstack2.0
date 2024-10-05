const numbers = [10, 75, 22, 50, 99, 5, 63, 42];

// Sort method
const sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers:", sortedNumbers);

// filter method
const filteredNumbers = sortedNumbers.filter(num => num > 50);
console.log("Filtered Numbers (greater than 50):", filteredNumbers);

// reduce method
const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of filtered numbers:", sum);


const decimalNumber = 12.56;

// Round the number
const rounded = Math.round(decimalNumber);
console.log("Rounded:", rounded);

// Ceil the number
const ceiled = Math.ceil(decimalNumber);
console.log("Ceiled:", ceiled);

// Floor the number 
const floored = Math.floor(decimalNumber);
console.log("Floored:", floored);