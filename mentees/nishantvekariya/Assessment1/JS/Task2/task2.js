function performOperations(num1, num2) {
  let sum = num1 + num2;
  let difference = num1 - num2;
  let areEqual = num1 === num2;
  let bothGreaterThanZero = num1 > 0 && num2 > 0;

  console.log("Sum:", sum);
  console.log("Difference:", difference);
  console.log("Are Equal:", areEqual);
  console.log("Both Greater Than Zero:", bothGreaterThanZero);
}

performOperations(5, 3);
