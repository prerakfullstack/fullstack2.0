function Operations(num1, num2) {
    const addNums = num1 + num2;
    const subNums = num1 - num2;
    const numsEqual = num1 === num2;
    const greaterThanZero = (num1 > 0) && (num2 > 0);

    console.log("The Numbers submitted for operations are:", num1 + " and " + num2);
    console.log("Addition of the Numbers:", addNums);
    console.log("Subtraction of the Numbers:", subNums);
    console.log("Are both the Numbers Equal? -", numsEqual);
    console.log("Are both Numbers greater then Zero? -", greaterThanZero);
}

Operations(6,9);
console.log("------------------")
Operations(-11, 0)
console.log("------------------")
Operations(0,0);