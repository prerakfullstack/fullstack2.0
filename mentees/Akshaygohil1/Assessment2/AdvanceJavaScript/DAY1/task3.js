// Template Literals in JavaScript
// Template literals, introduced in ES6, provide an easier and more readable way to create strings.
//  They allow embedding expressions directly into strings and support multi-line strings without the need for concatenation.

// 1. Syntax
// Template literals are enclosed by backticks ( ` ) instead of single or double quotes.

const name1 = "Akshay";
console.log(`Hello, ${name1}!`); // Output: Hello, Akshay!


// 2. Embedding Expressions
// You can embed expressions directly inside template literals using the ${} syntax. 
// These expressions are evaluated and their result is included in the string.

const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 5 and 10 is 15.


// Expressions can include:

// Variables
// Function calls
// Arithmetic operations
// Any valid JavaScript expression

const greet = name => `Hello, ${name}!`;
console.log(`${greet("Akshay")}, welcome to JavaScript!`);
// Output: Hello, Akshay!, welcome to JavaScript!

// --------------------------------------------

// 3. Multi-line Strings
// Template literals make it easy to create multi-line strings without needing escape characters or concatenation.

const poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;
console.log(poem);

// Roses are red,
// Violets are blue,
// JavaScript is fun,
// And so are you.


// ------------------------------------------
// Combining Strings Dynamically
// Template literals simplify concatenation by embedding variables or results dynamically.

const firstName = "Akshay";
const lastName = "Gohil";
const fullName = `${firstName} ${lastName}`;
console.log(`Your full name is: ${fullName}.`);
// Output: Your full name is: Akshay Gohil.

// ----------------------------------------------
// 5. Nesting Template Literals
// Template literals can be nested, which is helpful when working with dynamic or multi-level data.

const items = ['HTML', 'CSS', 'JavaScript'];
const list = `My favorite web development tools are:
${items.map(item => `- ${item}`).join('\n')}`;
console.log(list);

// output
// My favorite web development tools are:
// - HTML
// - CSS
// - JavaScript

// 6. Tagged Templates
// A more advanced feature of template literals is tagged templates,
// which let you customize how the literal is processed by writing a function (tag) to parse it.

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<strong>${values[i] || ''}</strong>`, '');
}

const name = "Akshay";
const age = 65;
console.log(highlight`Name: ${name}, Age: ${age}`);
// Output: Name: <strong>Akshay</strong>, Age: <strong>65</strong>
