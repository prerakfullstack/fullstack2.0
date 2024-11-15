function personDetails(person) {
  const { firstName, lastName, age } = person;
  console.log(`Name: ${firstName} ${lastName} Age: ${age}`);
}

const person = { firstName: "Prem", lastName: "Pujara", age: 18 };
personDetails(person);

function sum(numbers) {
  const [a, b, c] = numbers;
  return a + b + c;
}

const numbers = [5, 15, 25];
console.log(sum(numbers));