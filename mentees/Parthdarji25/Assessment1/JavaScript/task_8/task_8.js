// Create an array of numbers
let numbers = [23, 65, 12, 98, 37, 51, 42, 88, 19];

// Method chaining to :: sort in descending order, filter, and reduce
let sumOfFilteredNumbers = numbers
  .sort((a, b) => b - a) // Sort in descending order
  .filter((num) => num <= 50) // Filter out numbers > 50
  .reduce((acc, curr) => acc + curr, 0); // Calculate sum

console.log("Sum of numbers <= 50:", sumOfFilteredNumbers);

// Rounding, Ceiling, and Flooring Using Different Decimal Numbers and Methods
function manipulateDecimalfunction(decimalNumber) {
    
  console.log("Rounded:", Math.round(decimalNumber));
  console.log("Ceil:", Math.ceil(decimalNumber));
  console.log("Floor:", Math.floor(decimalNumber));
}

// Call the function with a new decimal number
manipulateDecimalfunction(6.87);
manipulateDecimalfunction(3.14);
