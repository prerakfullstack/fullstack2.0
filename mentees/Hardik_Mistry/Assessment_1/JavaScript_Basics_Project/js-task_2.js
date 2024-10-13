function addTwoNumbers(num1, num2) {
    return parseInt(num1) + parseInt(num2);
};
function subtraction(num1, num2) {
    return parseInt(num1) - parseInt(num2);
};

function checkEquilityOfTwoNum(num1, num2) {
    return parseInt(num1) === parseInt(num2);
};

function checkGreaterThen0(num1, num2) {
    return parseInt(num1) > 0 && parseInt(num2) > 0;
};

console.log("checkGreaterThen0   ===>>>>>", checkGreaterThen0(1, 5));
console.log("checkGreaterThen0   ===>>>>>", checkGreaterThen0(0, 5));
console.log("checkGreaterThen0   ===>>>>>", checkGreaterThen0(1, 0));
