
// Arrow functions, introduced in ES6, provide a concise syntax for writing functions in JavaScript. They come with notable differences compared to regular functions, such as implicit return and the absence of a this binding. Here's a breakdown:

// 1. Simplified Syntax
// Arrow functions eliminate the need for the function keyword and use a more compact syntax.

// Regular Function:
function add(a, b) {
    return a + b;
}

// Arrow Function:
const add = (a, b) => a + b;

// -------------------------------------

// Key Features:
// Single parameter: Parentheses can be omitted

const square = x => x * x;

// No parameters: Parentheses are required.
const greet = () => "Hello, World!";

// Multiple parameters: Parentheses are required
const multiply = (a, b) => a * b;

// -------------------------------
// If the function body contains a single expression, 
// you can omit the {} braces and return keyword. 
// This is known as implicit return.

// 1
const subtract = (a, b) => a - b; // Implicit return
console.log(subtract(10, 5)); // Output: 5

// 2
const calculate = (a, b) => {
    const sum = a + b;
    return sum; // Explicit return
};

