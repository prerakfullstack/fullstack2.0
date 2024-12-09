// Q1.
// sort
let numbers = [53, 34, 65, 9, 13, 78, 12, 19, 51, 89];

numbers.sort((a, b) => {
	return b - a;
});

console.log(numbers);

// filter
let newArray = numbers.filter((num) => {
	return num < 50;
});

console.log(newArray);

// reduce
let sum = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});
console.log(`Sum is ${sum}`);

// Q2.

let decimalNum = 2.50;
console.log(Math.round(decimalNum));
console.log(Math.floor(decimalNum));
console.log(Math.ceil(decimalNum));
