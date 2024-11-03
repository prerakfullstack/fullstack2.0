const add = (a,b) => a + b;


const result = add(3,67);
console.log(result); 
//arrow function





const jsonString = `{
    "name": "Bansari",
    "age": 18,
    "interests": ["coding", "writing", "painting"]
}`;

//parse of json object
const userProfile = JSON.parse(jsonString);


console.log("User's interests:", userProfile.interests); 
