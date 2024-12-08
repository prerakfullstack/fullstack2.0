// Q1.
let sum = (num1, num2) => {
    return num1 + num2;
};

console.log("Sum is: ", sum(2, 8));

// Q2.
let myJsonString = `{
    "name": "Dheeraj",
    "age": 20,
    "interests": "Propgramming"
}`;

let userProfile = JSON.parse(myJsonString);

console.log(userProfile["name"]);
console.log(userProfile["age"]);
console.log(userProfile["interests"]);
