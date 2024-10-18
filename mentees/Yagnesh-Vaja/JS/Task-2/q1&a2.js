function performOperations(num1, num2) {

    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    

    const difference = num1 - num2;
    console.log(`The difference when ${num2} is subtracted from ${num1} is: ${difference}`);
    

    const areEqual = num1 === num2;
    console.log(`Are ${num1} and ${num2} equal? ${areEqual}`);
    

    const bothPositive = num1 > 0 && num2 > 0;
    console.log(`Are both ${num1} and ${num2} greater than zero? ${bothPositive}`);
}


performOperations(5, 3);
performOperations(10, 10);
performOperations(-5, 7);
