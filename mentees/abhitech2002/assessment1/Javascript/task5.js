// Object declaration
const person = {
    firstName: 'Abhishek',
    lastName: 'Ojha',
    age: 22
}

function personDetails({ firstName, lastName, age }) {
    ;
    return `Name: ${firstName} ${lastName}, Age: ${age}`;
}

console.log(personDetails(person))

// Sum using array in parameters
const numbers = [1, 2, 3];

function sumArray([a, b, c]) {
    return a + b + c;
}

console.log("sum of array", sumArray(numbers));
