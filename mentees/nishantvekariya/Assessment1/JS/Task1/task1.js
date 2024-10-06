let name = "Nishant Vekariya";
const birthYear = 1999;
var isStudent = true;
let programmingLanguages = ["JavaScript", "React", "Node"];

name = "Nishant";
console.log("Updated Name:", name);

try {
  birthYear = 1998;
} catch (error) {
  console.log("Error:", error.message);
}

isStudent = false;
console.log("Updated Student Status:", isStudent);

programmingLanguages[0] = "Java";
console.log("Updated Programming Languages:", programmingLanguages);

var isStudent = false;
console.log("Redeclared Student Status:", isStudent);
