const dummyArray = [1, 50, 45, 90, 100, 233, 38]

dummyArray.sort()
dummyArray.reverse()

console.log(dummyArray, 'Sort');

const filterArray = dummyArray.filter((item) => (item >= 50))

console.log(filterArray, 'filter');

const sumOfAll = dummyArray.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(sumOfAll, 'sum of all');

const decimalNumber = 1.23;
console.log(Math.floor(decimalNumber), 'Floor');
console.log(Math.round(decimalNumber), 'Round');
console.log(Math.ceil(decimalNumber), 'Ceil');
