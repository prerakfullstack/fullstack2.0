const addNumbers = (num1, num2) => {
    return num1 + num2;
}

const subtractNumbers = (num1, num2) => {
    return num2 - num1;
}

const checkIfEqual = (num1, num2) => {
    let isEqual = (num1 === num2) ? true : false;
    return isEqual;
}

const checkGreaterThanZero = (num1, num2) => {
    let isGreater = (num1 && num2 > 0) ? true : false;
    return isGreater;
}

console.log(addNumbers(2, 5));
console.log(subtractNumbers(2, 5));
console.log(checkIfEqual(2, 5));
console.log(checkGreaterThanZero(2, 5));