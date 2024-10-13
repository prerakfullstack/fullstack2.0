let numbers = [34, 12, 78, 56, 89, 23, 45, 67];

let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted in descending order:", sortedNumbers);

let filteredNumbers = sortedNumbers.filter((num) => num > 50);
console.log("Numbers <= 50:", filteredNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers <= 50:", sum);

let decimalNumber = 45.67;

let rounded = Math.round(decimalNumber);
console.log("Rounded:", rounded);

let ceiled = Math.ceil(decimalNumber);
console.log("Ceil:", ceiled);

let floored = Math.floor(decimalNumber);
console.log("Floor:", floored);

// Output
// Sorted in descending order: [
//     89, 78, 67, 56,
//     45, 34, 23, 12
//   ]
//   Numbers <= 50: [ 89, 78, 67, 56 ]
//   Sum of numbers <= 50: 404
//   Rounded: 46
//   Ceil: 46
//   Floor: 45
