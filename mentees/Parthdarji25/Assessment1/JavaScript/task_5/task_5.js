function personDetailsLogged({ firstName, lastName, age }) {
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

// Example usage:
const person = {
  firstName: "Parth",
  lastName: "Darji",
  age: 25,
};

personDetailsLogged(person);
// Output: Name: Parth Darji, Age: 25

// function deconstructing
function sumOfThreeNumber([a, b, c]) {
  return a + b + c;
}

const numbers = [1, 8, 6];
console.log(sumOfThreeNumber(numbers));
