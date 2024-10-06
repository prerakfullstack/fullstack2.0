const num = [34, 454, 65, 34, 45, 46];

// Sorting
num.sort((a, b) => b - a);
console.log('Sorted array:', num);

// Filter
const filterNum = num.filter(num => num <= 50);
console.log('Filterd Array', filterNum)

// sum of all number using reduce
const sum = num.reduce((acc, curr) => acc + curr, 0)
console.log('Sum of all numbers using reduce:', sum);

// Using Math Methods
const decimalNumber = 3.17159;
const rounded = Math.round(decimalNumber);
const ceiling = Math.ceil(decimalNumber);
const floor = Math.floor(decimalNumber);

console.log('Rounded:', rounded);
console.log('Ceiling:', ceiling);
console.log('Floor:', floor);