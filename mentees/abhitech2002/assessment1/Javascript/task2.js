console.log("Operators and Arithmetic Operations")

// Functions
function sum(num1, num2) {
    let sum = 0;
    sum = num1 + num2;
    return sum
}

function substraction(num1, num2) {
    let sum = 0;
    if (num1 > 0 && num2 > 0) {
        console.log(`${num1} and ${num2} are both positive numbers.`);
        sum = num1 - num2;
        return sum;
    } else if (num1 < 0 && num2 < 0) {
        console.log(`${num1} and ${num2} are both negative numbers.`);
        sum = num1 - num2;
        return sum;
    } else {
        console.log(`${num1} is ${num1 > 0 ? 'positive' : 'negative'}, and ${num2} is ${num2 > 0 ? 'positive' : 'negative'}.`);
        sum = num1 - num2;
        return sum;
    }
}

// Calling
const sumOfNumber = sum(10, 34);
const substractionOfNumber = substraction(31, -87)

// Console log 
console.log(`The sum of value is ${sumOfNumber}`)
console.log(`The substraction of value is ${substractionOfNumber}`)