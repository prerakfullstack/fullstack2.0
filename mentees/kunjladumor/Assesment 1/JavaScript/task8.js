{
  console.log("***********Task 8***********");

  const numbers = [23, 67, 89, 12, 45, 78, 34, 56, 90, 11];

  const sortedNumbers = numbers.sort((a, b) => b - a);

  const filteredNumbers = sortedNumbers.filter((num) => num > 50);

  const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);

  console.log("Sorted Numbers:", sortedNumbers);
  console.log("Filtered Numbers:", filteredNumbers);
  console.log("Sum of Filtered Numbers:", sum);

  const decimalNumber = 45.67;

  const rounded = Math.round(decimalNumber);
  const ceiled = Math.ceil(decimalNumber);
  const floored = Math.floor(decimalNumber);

  console.log("Rounded:", rounded);
  console.log("Ceiled:", ceiled);
  console.log("Floored:", floored);

  console.log("************Task 8 ended************");
}
