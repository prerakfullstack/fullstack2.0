const userName = "AkshayGohil1"

localStorage.setItem('username', userName)

let retriveUserName = localStorage.getItem('username');

document.write(retriveUserName)

// Maps
const countriesCapitals = new Map([
    ["India", "New Delhi"],
    ["Germany", "Berlin"],
    ["Canada", "Ottawa"],
   
]);

// Function to get the capital of a given country
function getCapital(country) {
    const capital = countriesCapitals.get(country);
    return capital ? capital : "Country not found";
}

// Example usage
console.log(getCapital("India"));
console.log(getCapital("Germany"));

const uniqueValues = new Set(["Akshay", "rajesh", "jagruti", "viraj"]);

function valueExists(value) {
    return uniqueValues.has(value);
}

console.log(valueExists("Akshay"));
console.log(valueExists("yash"));


