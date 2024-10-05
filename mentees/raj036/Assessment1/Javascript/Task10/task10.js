const addNumbers = (a, b) => a + b;

console.log(addNumbers(5, 7));

// Created JSON object as a string
const userProfileJSON = `{
    "name": "John Doe",
    "age": 28,
    "interests": ["coding", "gaming", "reading"]
}`;

// Parse the JSON string into JavaScript object
const userProfile = JSON.parse(userProfileJSON);

console.log("Name:", userProfile.name); 