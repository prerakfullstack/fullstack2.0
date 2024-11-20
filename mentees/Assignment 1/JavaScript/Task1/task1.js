
//string type
const fName = "Dhruv";

//number type
let birth = 2004;

//boolean
let student = true;

//array type
let programmingLanguages = ["C/C++", "Java", "Python"]

console.log(fName +' '+ birth + ' Programming language Knows: ' + programmingLanguages)

programmingLanguages[2] = 'c#'

try {
    fName = "Dhruv"
} catch (error) {
    console.log('Did not changed the name to \'Dhruv Pithva\' Cause of: ' + error);
}

console.log(fName +' '+ birth + ' Programming language Knows: ' + programmingLanguages)

if (student) {
    var check = "It is in GLOBLE Scope";
    let test = "It is in LOCAL Scope";
}

console.log(check)
try {
    console.log(test);
} catch (error) {
    console.log("Error Occured: " + error);
}

