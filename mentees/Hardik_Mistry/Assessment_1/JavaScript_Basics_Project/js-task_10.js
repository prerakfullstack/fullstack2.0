const addTwoNumbers = (num1, numm2) => num1 + numm2;

console.log("add 5 and 8 ==>>>", addTwoNumbers(5, 8));



const userProfileJSON = `{
    "name": "John Doe",
    "age": 30,
    "interests": ["reading", "coding", "hiking"]
  }`;

const userProfileNotParsed = userProfileJSON;
const userProfileParsed = JSON.parse(userProfileJSON);

console.log(userProfileNotParsed.name);// logs undefind
console.log(userProfileParsed.name); // logs John Doe.


