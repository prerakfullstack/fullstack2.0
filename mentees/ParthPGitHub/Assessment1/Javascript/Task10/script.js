// 1. Simple arrow function to add two numbers
const add = (a, b) => a + b;

// Example usage of the add function
const sum = add(5, 10);
console.log(`Sum: ${sum}`);

// 2. JSON object representing a user’s profile
const userProfileJSON = `{
    "name": "TestUser",
    "age": 20,
    "interests": ["reading", "coding", "traveling"]
}`;

// Parse the JSON object
const userProfile = JSON.parse(userProfileJSON);

// Log one of the properties to the console
console.log(`User Name: ${userProfile.name}`);