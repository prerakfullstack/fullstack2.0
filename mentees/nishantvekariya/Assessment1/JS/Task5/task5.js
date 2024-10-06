function logPersonDetails({ firstName, lastName, age }) {
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

const person = {
  firstName: "Nishant",
  lastName: "Vekariya",
  age: 25,
};

logPersonDetails(person);

function sumOfNumbers([num1, num2, num3]) {
  return num1 + num2 + num3;
}

const numbers = [5, 10, 15];
const sum = sumOfNumbers(numbers);
console.log("Sum of numbers:", sum);
