// function deconstruction
function sumOfThree([a, b, c]) {
    return a + b + c;
}

const numbers = [4, 5, 6];
console.log(sumOfThree(numbers));

// object destructuring
function personDetails({ firstName, lastName, age }) {
    return `Hello I m ${firstName} ${lastName} and my age is ${age} years.`;
}

const person = {
    firstName: "Raj",
    lastName: "Trivedi",
    age: 25
};

console.log(personDetails(person));