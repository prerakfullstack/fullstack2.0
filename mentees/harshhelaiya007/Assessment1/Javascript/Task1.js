let codeName = "Harsh Helaiya"
const dateOfBirth = "25/02/2002"
var isStudent = false

let skilsArray = ["Javascript","PHP","Python"]

// let and var will you reassign but let won't let you redeclare
codeName = "Aashish"
// dateOfBirth = "26/06/1999"
isStudent = true
// Uncaught TypeError: invalid assignment to const 'dateOfBirth'
console.log(codeName, 'Name');
console.log(dateOfBirth, 'DOB');
console.log(isStudent, 'isStudent');

