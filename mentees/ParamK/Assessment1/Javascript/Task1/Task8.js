let arr = [10, 5, 80, 3, 64];

arr.sort((a, b) => a - b);
console.log(arr);

let greaterThanArr = arr.filter((num) => {
    return num > 50;
})
console.log(greaterThanArr);

let arraySum = arr.reduce((acc, currentVal) => {
    return acc + currentVal;
}, 0)

console.log(arraySum);
console.log(Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.round(4.4));