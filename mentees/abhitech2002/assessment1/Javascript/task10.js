// Adding numbers
const addNumber = (a, b) => {
    return a + b;
}

console.log(addNumber(10, 13))

// JSON
const userProfile = {
    name: "Abhishek Ojha",
    age: 30,
    interest: ["Reading", "Hiking", "Coding"]
}

console.log(userProfile.name + "likes to have interest in " + userProfile.interest.join(' '));
