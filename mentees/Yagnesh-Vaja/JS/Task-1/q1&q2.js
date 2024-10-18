// 1. Declaring variables

// Using let to store your name
let name = "Yagnesh Vaja";
document.write(name)

// Using const to store your birth year
const birthYear = 1999;
document.write(birthYear)

// Using var to store a boolean indicating if you are a student
var isStudent = true;
document.write(isStudent)

// Using const to store an array of programming languages you know
const programmingLanguages = ["HTML", "CSS", "JavaScript"];
document.write(programmingLanguages)



// 2. Attempting to reassign variables

// Reassigning let variable
name = "John Doe"; // This will work, since 'let' allows reassignment
document.write(name)

// Reassigning const variable
// birthYear = 2000; // This will throw an error, since 'const' does not allow reassignment

// Reassigning var variable
isStudent = false; // This will work, since 'var' allows reassignment
document.write(isStudent)

// Reassigning const array (modifying array elements)
programmingLanguages.push("Python"); 
document.write(programmingLanguages)
// This will work, since arrays declared with 'const' can be modified (but not reassigned)
// programmingLanguages = ["Python", "C++", "Ruby"]; // This will throw an error, since reassignment is not allowed
