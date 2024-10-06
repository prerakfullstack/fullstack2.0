// Merging Two Arrays Using Spread Operator
const array1 = [10, 20, 30, 40, 50];
const array2 = [60, 70, 80];

let newArray = [...array1]; // First, clone array1
newArray = [...newArray, ...array2]; // Then merge array2 into the new array

console.log(newArray); // Output: [10, 20, 30, 40, 50, 60, 70, 80]

// Object Construction.
const human = {
  name: "Parth",
  age: 28,
  favoriteProgrammingLanguages: ["Java", "C++", "React Js"],
};

// Copy the object without modification
let newPerson = { ...human };

//  Modify only the `age` property
newPerson.age = 29;

console.log(newPerson);
// Output:
// {
//   name: 'Parth',
//   age: 29,
//   favoriteProgrammingLanguages: ['Java', 'C++', 'React Js']
// }
