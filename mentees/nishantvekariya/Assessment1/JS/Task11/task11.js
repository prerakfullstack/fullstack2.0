const storeUserName = (name) => {
  localStorage.setItem("userName", name);
};

const displayUserName = () => {
  const storedName = localStorage.getItem("userName");
  if (storedName) {
    document.getElementById("userName").textContent = storedName;
  } else {
    document.getElementById("userName").textContent = "No name stored.";
  }
};

storeUserName("Nishant Vekariya");
displayUserName();

const countryCapitalMap = new Map([
  ["India", "New Delhi"],
  ["USA", "Washington D.C."],
  ["France", "Paris"],
]);

const getCapital = (country) => {
  return countryCapitalMap.get(country) || "Capital not found";
};

console.log("Capital of India:", getCapital("India"));
console.log("Capital of USA:", getCapital("USA"));
console.log("Capital of UK:", getCapital("UK"));

const uniqueValuesSet = new Set([10, 20, 30, 40, 50]);

const checkValueInSet = (value) => {
  return uniqueValuesSet.has(value);
};

console.log("Does the set contain 30?", checkValueInSet(30));
console.log("Does the set contain 60?", checkValueInSet(60));
