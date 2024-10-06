const addingNumbers = (a, b) => a + b;

console.log(addingNumbers(15, 72));

// Created JSON object as a string
const userJSON = `{
    "name": "Parth",
    "age": 28,
    "interests": ["coding", "Cricket", "reading"]
}`;

const userPro = JSON.parse(userJSON);

console.log("Name:", userPro.name);
