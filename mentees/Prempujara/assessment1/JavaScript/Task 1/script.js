let name = "Prem Pujara";
console.log(name);
let isStudent = true;

const age = 18;
console.log(age);
const programmingLanguages = ["Python", "Java", "C#"]
console.log(programmingLanguages)

var birthYear = 2006;
console.log(birthYear);

// ! Reassigning let variables

name = "Akshar Pujara";
console.log(name);
// * this will work because let allows reassignment

// ! Reassigning const variable

age = 19;
console.log(age);
// * script.js:20 Uncaught TypeError: Assignment to constant variable. (error message displayed in browser). const does not allow reassignment of the variable itself, but values inside an object or array declared with const can be modified.

// ! Reassigning var variable

birthYear = 2007;
console.log(birthYear);
