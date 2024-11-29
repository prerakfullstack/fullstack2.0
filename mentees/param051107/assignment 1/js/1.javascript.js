


let name = "John Doe"; 
let birthYear = 1990; 
let isStudent = true; 
let languages = ["JavaScript", "Python", "C++"];


name = "Jane Smith"; 
console.log("Updated name using let:", name);


const city = "New York"; 
const birthMonth = "April";
const isEmployed = false; 
const favoriteFoods = ["Pizza", "Sushi", "Tacos"]; 



favoriteFoods[0] = "Burgers"; 
console.log("Updated favorite foods using const:", favoriteFoods); 


var country = "USA"; 
var age = 34; 
var hasPets = true;
var hobbies = ["Reading", "Cycling", "Cooking"]; 

country = "Canada"; 
console.log("Updated country using var:", country); 

if (true) {
    var blockVar = "I am accessible outside the block.";
}
console.log("Var scope example:", blockVar); 


if (true) {
    let blockLet = "I am accessible only inside this block.";
    console.log("Let scope example inside block:", blockLet); 
}



if (true) {
    const blockConst = "I am also only accessible inside this block.";
    console.log("Const scope example inside block:", blockConst); 
}
console.log()