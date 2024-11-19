const array1 = [2,4,6,8,10];
const array2 = [12,14,16];

const mergedArray = [...array1, ...array2];
console.log(mergedArray);


const person = { firstName: "Prem", lastName: "Pujara", age: 18 };


const updatedPerson = {...person, age: 20};
console.log(updatedPerson);

console.log(person);