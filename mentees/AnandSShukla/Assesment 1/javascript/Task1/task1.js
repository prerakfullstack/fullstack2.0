let MenteeName = "Anand Shukla";
const DOB = "25/04/2000";
var isStudent = true;

// let skills = ["Javascript","Node","React"]
const skills = ["Javascript","Node","React"]

MenteeName = "Bhulku Anand"
// dateOfBirth = "26/06/1999"
// skills = ["none skills"]
//const array can be updated , modified but cannot be re-assigned, re-declared
skills.push("python")
isStudent = true
// Uncaught TypeError: invalid assignment to const 'dateOfBirth'
console.log(MenteeName);
console.log(DOB);
console.log(isStudent);
console.log(skills);



/* const variable cannot be reassigned and must be initaialized when declared. here i got TypeError: Assignment to constant variable.
var, let variables can be reassigned.

other outputs
Bhulku Anand 
25/04/2000 DOB
true isStudent
*/
