const numbers = [10, 40, 60, 100, 30];

const sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted in descending order:", sortedNumbers);

const filteredNumbers = numbers.filter(num => num <= 50);
console.log("Filtered numbers (<= 50):", filteredNumbers);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of filtered numbers:", sum);

const decimalNumber = 7.3;
const rounded = Math.round(decimalNumber);
const ceiled = Math.ceil(decimalNumber);
const floored = Math.floor(decimalNumber);

console.log("Original number :", decimalNumber);
console.log("Rounded number :", rounded);
console.log("Ceiled number :", ceiled);
console.log("Floored number :", floored);