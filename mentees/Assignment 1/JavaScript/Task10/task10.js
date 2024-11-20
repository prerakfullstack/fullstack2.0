// let sum = (a,b)=> a+b;

// let a = 29;
// let b = 27;
// console.log(sum(a,b));

const userProfile = {
    name : 'Dhruv',
    age : 19,
    intrest : 'Music'
};

//print JSON object created
console.log(userProfile);

//Converting JSON Valid object to the String
let jsonStr = JSON.stringify(userProfile)
console.log(jsonStr);

//parsing the Valid JSON String to the valid JSON Object 
let newUserProfile = JSON.parse(jsonStr)
console.log(newUserProfile);
console.log(newUserProfile.intrest);
