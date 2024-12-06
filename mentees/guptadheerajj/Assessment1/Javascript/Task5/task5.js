//Q1. Object destructuring
let personDetails = {
    firstName: "Dheeraj",
    lastName: "Gupta",
    age: 20
};
function desconstructObject(obj) {
    // Here while destructuring the object I am giving different name to the variables by using the syntac originalPropertyName: newVariableName just to practice it 
    let {firstName: fName, lastName: lName, age} = obj;

    console.log(`Person details:\nFirst name is ${fName}\nLast name is ${lName}\nAge is ${age}`);
}
desconstructObject(personDetails);

//Q2. Array destructuring
let array = [2, 3, 4];
function sum(array) {
    let [num1, num2, num3] = array;
    summation = num1 + num2 + num3;
    console.log(`Sum is ${summation}`);
}
sum(array);