const numbers = [20, 40, 60, 80, 100];

const descendingOrder = numbers.slice().sort((a, b) => b - a);
console.log(descendingOrder);

const filterNumbers = numbers.filter((numbers) => numbers >= 50);
console.log(filterNumbers);

const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumOfNumbers);

const decimal = 5.45;

const roundedDecimal = Math.round(decimal);
console.log("Rounded Decimal:" ,roundedDecimal);

const ceilDecimal = Math.ceil(decimal);
console.log("Ceil Decimal:", ceilDecimal);

const floorDecimal = Math.floor(decimal);
console.log("Floor Decimal:", floorDecimal);