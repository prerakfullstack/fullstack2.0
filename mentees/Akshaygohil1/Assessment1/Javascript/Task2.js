function performOperationsOnNum(num1, num2) {
    // Add them 
    let sum = num1 + num2
    console.log(sum, 'Added Together Result');
    // subtract
    let subtract = num2 - num1
    console.log(subtract, 'Num2 subtracted from num1');
    // comparison 
    if (num1 == num2) {
        console.log('Yes they are equal');
    } else if (num1 > 0) {
        console.log('num1 is greater then zero');
    } else if (num2 > 0) {
        console.log('num2 is greater then zero');
    }
}