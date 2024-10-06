// Array declaration
let num1 = ['34', '454', '43', '56', '67'];
let num2 = ['45', '56', '56'];

let result = [...num1, ...num2] // separad oprator use

console.log(result);

// Object declaration
const person = {
    firstName: 'Abhishek',
    lastName: 'Ojha',
    age: 22
}

const copiedPerson = {
    ...person,
    age: 31
}

console.log(copiedPerson);
