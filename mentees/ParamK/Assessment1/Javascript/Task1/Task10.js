const getSum = (num1, num2) => {
    return num1 + num2;
}
console.log(getSum(3, 7));

const user = {
    name: "John",
    age: 24,
    interests: ["swimming", "cycling", "running"]
}
console.log(user);

let userData = JSON.stringify(user);
console.log(userData);

let userDetails = JSON.parse(userData);
console.log(userDetails.name);