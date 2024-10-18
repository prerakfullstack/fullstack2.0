
const userProfileJSON = `
{
    "name": "Yagnesh Vaja",
    "age": 25,
    "interests": ["coding", "music", "travelling"]
}`;


const userProfile = JSON.parse(userProfileJSON);


console.log("User's Name:", userProfile.name); 
