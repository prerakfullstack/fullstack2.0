const add = (a, b) => a + b;

const userProfile = `{"name": "AMhitabh bacchan", "age": 66, "interests": ["coding", "music", "sports"]}`
const parsedProfile = JSON.parse(userProfile)
console.log(parsedProfile.name)
