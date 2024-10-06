const numbers = [10, 55, 32, 80, 23, 67, 12, 49];

const sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted in Descending Order:", sortedNumbers);

const filteredNumbers = sortedNumbers.filter(num => num <= 50);
console.log("Filtered Numbers (<= 50):", filteredNumbers);

const sum = filteredNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Filtered Numbers:", sum);

const decimalNumber = 5.67;
console.log("Rounded:", Math.round(decimalNumber));
console.log("Ceil:", Math.ceil(decimalNumber));
console.log("Floor:", Math.floor(decimalNumber));
