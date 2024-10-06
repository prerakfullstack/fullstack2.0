const name = "Parth Darji";
const birthYear = 1990;
const isStudent = true;
const programmingLanguages = ["JavaScript", "Python", "Java"];

// Attempt to reassign const variables
try {
  name = "Parth D";
} catch (error) {
  console.log("Error reassigning name:", error.message);
}

try {
  birthYear = 1995;
} catch (error) {
  console.log("Error reassigning birthYear:", error.message);
}

try {
  isStudent = false;
} catch (error) {
  console.log("Error reassigning isStudent:", error.message);
}

try {
  programmingLanguages = ["C++", "Ruby", "Go"];
} catch (error) {
  console.log("Error reassigning programmingLanguages:", error.message);
}

// Using let
let age = 34;
age = 35; // Works

// Using var
var city = "Mumbai";
city = "Mira Road"; // Works

console.log("Name:", name);
console.log("Birth Year:", birthYear);
console.log("Is Student:", isStudent);
console.log("Programming Languages:", programmingLanguages);
console.log("Age:", age);
console.log("City:", city);
