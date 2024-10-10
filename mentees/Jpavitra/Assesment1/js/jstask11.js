function storeUserName(name) {
    localStorage.setItem("userName", name);
}

function displayUserName() {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
        document.getElementById("nameDisplay").textContent = `Hello, ${storedName}!`;
    } else {
        document.getElementById("nameDisplay").textContent = "No name found in LocalStorage!";
    }
}

document.addEventListener("DOMContentLoaded", displayUserName);

const countryCapitals = new Map([
    ["USA", "Washington, D.C."],
    ["India", "New Delhi"],
    ["Japan", "Tokyo"]
]);

function getCapital(country) {
    return countryCapitals.has(country) ? countryCapitals.get(country) : "Country not found!";
}

const uniqueValues = new Set([1, 2, 3, 4, 5]);

function checkValueExists(value) {
    return uniqueValues.has(value);
}