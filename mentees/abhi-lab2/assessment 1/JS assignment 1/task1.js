
let studName = "Abhi"
const birthYear = 1996
var isStudent = true
const programmingLanguages = ["JavaScript", "Python", "Java"]

console.log("Initial values:")
console.log("studName:", studName)
console.log("Birth Year:", birthYear)
console.log("Is Student:", isStudent)
console.log("Programming Languages knwn:", programmingLanguages)

console.log("Attempting to reassign variables--:");

studName = "Chaudhari";
console.log("studName:", studName);

// try catch block to reassign birthYear, using if else
if (birthYear) {
    try {
        birthYear = 1997
    } catch (error) {
        console.log("Error when trying to reassign birthYear :", error.message)
    }
} else {
    console.log('Birth Year is undefined')
}

isStudent = false;
console.log("Is Student", isStudent)

programmingLanguages.push("C++");
console.log("Programming Languages after push:", programmingLanguages)

try {
    programmingLanguages = ["Ruby", "Go", 'PHP'];
} catch (error) {
    console.log("Error when trying to reassign programmingLanguages Line 33 :", error.message);
}