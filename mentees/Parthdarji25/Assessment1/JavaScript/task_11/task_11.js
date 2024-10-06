// LocalStorage functionality
function saveName() {
  const name = document.getElementById("userName").value;
  localStorage.setItem("userName", name);
  displayName();
}

// Function to display name from LocalStorage
function displayName() {
  const name = localStorage.getItem("userName");
  if (name) {
    document.getElementById("displayName").innerText = `Hello, ${name}!`;
  }
}

document.getElementById("saveButton").addEventListener("click", saveName);
window.onload = displayName;

// Create a Map for countries and capitals
const countryCapitalMap = new Map([
  ["USA", "Washington, D.C."],
  ["France", "Paris"],
  ["Japan", "Tokyo"],
]);

// Function to get the capital of a country
function getCapital() {
  const country = document.getElementById("countryInput").value;
  const capital = countryCapitalMap.get(country) || "Country not found";
  document.getElementById("capitalOutput").innerText = capital;
}

document
  .getElementById("getCapitalButton")
  .addEventListener("click", getCapital);

// Create a Set with unique values
const uniqueValues = new Set(["apple", "banana", "orange", "grape", "mango"]);

// Function to check if a value exists in the Set
function valueExists() {
  const value = document.getElementById("valueInput").value;
  const exists = uniqueValues.has(value);
  document.getElementById("valueOutput").innerText = exists
    ? "Value exists in the set."
    : "Value does not exist in the set.";
}

document
  .getElementById("checkValueButton")
  .addEventListener("click", valueExists);
