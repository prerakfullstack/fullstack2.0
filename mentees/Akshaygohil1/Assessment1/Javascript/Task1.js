let codeName = "Akshay Gohil";
const dateOfBirth = "11/11/2000";
var isStudent = false;
let number = 1;

let skilsArray = ["Javascript", "Node", "React"]

// let and var will you reassign but let won't let you redeclare
codeName = "viraj";
// dateOfBirth = "31/12/1998"
isStudent = true;
// assigning number another value 
number = 2;
// Uncaught TypeError: invalid assignment to const 'dateOfBirth'
console.log(codeName, 'Name');
console.log(dateOfBirth, 'DOB');
console.log(isStudent, 'isStudent');
console.log(number, 'number');

