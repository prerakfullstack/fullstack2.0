const addNumbers = (num1, num2) => num1 + num2;

console.log(addNumbers(5, 10)); 

const userProfileJSON = `
{
    "name": "Anand",
    "age": 25,
    "interests": ["coding", "gaming", "reading"]
}`;

const userProfile = JSON.parse(userProfileJSON);

console.log("User's Name:", userProfile.name); 

