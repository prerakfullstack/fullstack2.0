const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];

const mergedArray = [...firstArray, ...secondArray];
console.log(mergedArray);

const person = {
    name: "Vismay",
    age: 22,
    location: "Mumbai",
    favoriteLanguages: ["JavaScript", "Python", "MySQL"]
};

const updateThePerson = {...person, age: 24, location: "Surat"};

console.log("Original Person's Data:", person);
console.log("Updated Person's Data:", updateThePerson);