const userName = "Anand369";

// localStorage.setItem('username', userName)

// let retriveUserName = localStorage.getItem('username');

// document.write(retriveUserName)

const countriesCapitals = new Map([
  ["USA", "Washington"],
  ["India", "Delhi"],
  ["Nepal", "kathmandu"],
]);

function getCapital(country) {
  const capital = countriesCapitals.get(country);
  console.log("capital ", capital);
  return capital ? capital : "Country not found";
}

console.log(getCapital("USA"));

const uniqueValues = new Set(["anand", "anubhav", "bipin", "rahul", "anubhav"]);

function valueExists(value) {
  return uniqueValues.has(value);
}

console.log(valueExists("anand"));
console.log(valueExists("gandhi"));
