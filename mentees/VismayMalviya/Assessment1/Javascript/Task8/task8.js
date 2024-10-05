const numArray = [0, 59, 93, -8, 45, 27, -12, 90];

const sortedNums = numArray.sort((a, b) => b - a);
console.log("Sorted Numbers in Descending:", sortedNums);

const filteredNums = sortedNums.filter(num => num <= 50);
console.log("Filtered Numbers (less than or equal to 50):", filteredNums);

const sumFilteredNums = filteredNums.reduce((acc, currv) => acc + currv, 0);
console.log("Sum of Filtered Numbers:", sumFilteredNums);



const decimalNumber = 369.369;

const roundedNum = Math.round(decimalNumber);
console.log("Rounded Number (nearest integer):", roundedNum);

const ceiledNum = Math.ceil(decimalNumber);
console.log("Ceiled Number (rounds up):", ceiledNum);

const flooredNum = Math.floor(decimalNumber);
console.log("Floored Number (rounds down):", flooredNum);