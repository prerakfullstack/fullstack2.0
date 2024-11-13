function numbers(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
  const difference = num1 - num2;
  console.log(difference);
  const isEqual = num1 === num2;
  console.log(isEqual);
  const greaterThanZero = num1 > 0 && num2 > 0;
  console.log(greaterThanZero);

  return {
    sum,
    difference,
    isEqual,
    greaterThanZero,
  };
}
result = numbers(20, 10);
console.log(result);
