const add = (a, b) => a + b;

const sum = add(5, 3);

console.log(sum);

const userJson = `{
    "name": "Neel",
    "age": 24,
    "interests": ["Cricket", "Carrom", "coding"]
  }`;

const userProfile = JSON.parse(userJson);

console.log(userProfile.name, userProfile.age, userProfile.interests);