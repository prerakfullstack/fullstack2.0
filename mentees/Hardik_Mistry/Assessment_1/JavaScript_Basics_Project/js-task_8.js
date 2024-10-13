const numbers = [34, 67, 23, 89, 12, 55, 78, 43, 6, 90];

console.log('Sorted Numbers in descending ==>>>>>>', numbers.sort((a, b) => a - b));

console.log('Numbers greater than 50 ==>>>>>>>>>', numbers.filter(num => num > 50));

console.log('Sum of all numbers ===>>>>>', numbers.reduce((total, num) => total + num, 0));



const decimalNumber = 7.25;

console.log('Rounded ===>>>>>', Math.round(decimalNumber));

console.log('Ceil (round up) ===>>>>>>', Math.ceil(decimalNumber));

console.log('Floor (round down) ===>>>>>', Math.floor(decimalNumber));
