const addTheNums = (num1, num2) =>
    num1 + num2;

console.log(addTheNums(6, 9));


const usersProfile = JSON.stringify({
    name: "Vismay Malviya",
    age: 22,
    interests: ["speaking", "reading", "traveling", "coding"]
});

const parsedProfile = JSON.parse(usersProfile);

console.log(parsedProfile.name);
console.log(parsedProfile.interests);