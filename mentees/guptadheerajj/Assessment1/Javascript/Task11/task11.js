// Q1.
let input = document.getElementById("name");
let submit = document.getElementById("submit");
let display = document.getElementById("displayName");

let inputValue;
submit.addEventListener("click", () => {
	inputValue = input.value;
	localStorage.setItem("name", inputValue);
	display.innerHTML = `<h1>Your name is: ${localStorage.getItem("name")}</h1>`;
});


// Q2. 
const myMap = new Map([["India", "New Delhi"], ["Pakistan", "Islamabad"], ["Bangladesh", "Dhaka"]]);

function returnCapital(country) {
    return myMap.get(country);
}

console.log("Capital of India is:", returnCapital("India"));

// Q3.
// set removes duplicate value from the array and creates a new array. We pass an array inside Set() to create a set
let mySet = new Set([1, 2, 3, 4]);
console.log(mySet.has(1));