const getDetails = (propObj) => {
    let { firstName, lastName, age } = propObj;
    console.log(firstName);
    console.log(lastName);
    console.log(age);
}
getDetails({
    firstName: "John",
    lastName: "Doe",
    age: 24
})

const getSum = (arr) => {
    let [num1, num2, num3] = arr;
    return num1 + num2 + num3;
}
console.log(getSum([1, 5, 7]));