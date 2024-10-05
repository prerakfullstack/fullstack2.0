//two array merged using spread operator
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

//object modification
const person = {
    name: "Raj",
    age: 25,
    favoriteLanguages: ["JavaScript", "R", "C++"]
};
const updatedPerson = { ...person, age: 30 };
console.log(updatedPerson);
