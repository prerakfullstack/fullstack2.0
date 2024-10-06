const userName = "harshhelaiya007"

localStorage.setItem('username', userName)

let retriveUserName = localStorage.getItem('username');

document.write(retriveUserName)

// Maps
const countriesCapitals = new Map([
    ["USA", "Washington, D.C."],
    ["France", "Paris"],
    ["Japan", "Tokyo"]
]);

// Function to get the capital of a given country
function getCapital(country) {
    const capital = countriesCapitals.get(country);
    return capital ? capital : "Country not found";
}

// Example usage
console.log(getCapital("France"));
console.log(getCapital("Germany"));

const uniqueValues = new Set(["Harsh", "Kanubhai", "Kantaben", "Aashish"]);

function valueExists(value) {
    return uniqueValues.has(value);
}

console.log(valueExists("Harsh"));
console.log(valueExists("Rahul"));


