let numbers = [23, 67, 45, 12, 90, 34, 56, 78, 9, 89];

// 1.
let sortedArray = numbers.sort((a, b) => b - a);
console.log("Sorted Array Descending:", sortedArray)

let filterdArrya = sortedArray.filter(num => num <= 50);
console.log("Filtered Array", filterdArrya)

let sumOfFilterArr = filterdArrya.reduce((acc, num) => acc + num, 0);
console.log("Sum of Filtered Array Elements", sumOfFilterArr)


let decimalNumber = 45.67

let rounded = Math.round(decimalNumber)
console.log("rouned:", rounded)

let ceiled = Math.ceil(decimalNumber);
console.log("ceiled:", ceiled)

let floored = Math.floor(decimalNumber)
console.log("floored value:", floored)
