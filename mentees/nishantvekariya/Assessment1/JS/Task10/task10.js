const addNumbers = (a, b) => a + b;

const result = addNumbers(5, 10);
console.log("Sum:", result);
const userProfileJSON = `{
    "name": "Nishant Vekariya",
    "age": 25,
    "interests": ["Web Development", "JavaScript", "React"]
}`;
const userProfile = JSON.parse(userProfileJSON);
console.log("User's Interests:", userProfile.interests);
