let numbers=[9,3,5,4,3,68];// array
const sortedNumbers = numbers.sort((a, b) => b - a);//sorted array in descending order
const filteredNumbers = sortedNumbers.filter(num=> num <= 50);//fillterd 


console.log("Sorted Numbers:", sortedNumbers);
console.log("Filtered Numbers:", filteredNumbers);

//sum pending

var decimalNumber=(7.34)
function roundNumber(num) {
    console.log (Math.round(num));
}

function ceilNumber(num) {
    console.log( Math.ceil(num));
}

function floorNumber(num) {
   console.log( Math.floor(num));
}
 
var decimalnumber=7.34
console.log("Original Number:", (decimalNumber));
console.log("Rounded:", roundNumber(decimalNumber));  
console.log("Ceil:", ceilNumber(decimalNumber));     
console.log("Floor:", floorNumber(decimalNumber));    