{
  console.log("**********Task 2**********");

  function performOperations(num1, num2) {
    const sum = num1 + num2;
    console.log(`Sum: ${sum}`);

    const difference = num1 - num2;
    console.log(`Difference: ${difference}`);

    const areEqual = num1 === num2;
    console.log(`Are equal: ${areEqual}`);

    const bothGreaterThanZero = num1 > 0 && num2 > 0;
    console.log(`Both greater than zero: ${bothGreaterThanZero}`);
  }

  performOperations(5, 3);

  console.log("**********Task 2 ended**********");
}
