const numbers = [23, 89, 45, 12, 67, 5, 92, 34];


const sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted array in descending order:", sortedNumbers);



const filteredNumbers = sortedNumbers.filter(number => number <= 50);
console.log("Numbers less than or equal to 50:", filteredNumbers);



const sum = filteredNumbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers <= 50:", sum);
