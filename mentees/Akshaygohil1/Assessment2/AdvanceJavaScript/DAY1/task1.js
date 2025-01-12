// Definition: Variables declared with let and const are limited to the block {}
// in which they are defined. A block is a pair of curly braces,
// such as in loops, if statements, or functions.


// Best Practices:
// Always use const unless you know the value needs to change.
// Use let sparingly for variables that are meant to be reassigned.
// Avoid using var entirely for modern JavaScript development.

// example 1 
{
    let x = 10;
    const y = 20;
    console.log(x, y); // Output: 10, 20
}
console.log(x, y); // ReferenceError: x is not defined

// --------------------------------------------------

// Unlike var, let and const do not "leak" out of the block scope:
if (true) {
    var a = 5;  // Accessible outside this block
    let b = 10; // Limited to this block
    const c = 15; // Limited to this block
  }
  console.log(a); // Output: 5
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError

// CONST
// Immutability: const ensures that the binding to the value cannot be changed.
//  However, the value itself (if it's an object or array) can be mutated.

const x = 10;
x = 20; // TypeError: Assignment to constant variable

// --------------------------------------------------
// example of typeError 
const obj = { name: "Akshay" };
obj.name = "Pratham"; // Allowed (mutating the object)
console.log(obj.name); // Output: "Pratham"

obj = { name: "Darji" }; // TypeError: Assignment to constant variable