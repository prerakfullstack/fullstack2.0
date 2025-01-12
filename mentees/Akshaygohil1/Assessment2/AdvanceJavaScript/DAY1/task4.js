// Default Parameters in JavaScript
// Default parameters, introduced in ES6, allow you to provide fallback values for function arguments if no value is passed,
// or if the argument is explicitly set to undefined.
// This simplifies function logic and avoids the need for manual checks or default assignments.

function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  
  console.log(greet()); // Output: Hello, Guest!
  console.log(greet("Akshay")); // Output: Hello, Akshay!

  
//   ---------------------
function calculateTotal(price, tax = 0.1) {
    return price + price * tax;
  }
  
  console.log(calculateTotal(100)); // Output: 110 (tax = 0.1)
  console.log(calculateTotal(100, 0.2)); // Output: 120 (tax = 0.2)
  console.log(calculateTotal(100, undefined)); // Output: 110 (default tax)
  console.log(calculateTotal(100, 0)); // Output: 100 (tax = 0, not default)

// ----------------------------------

function greet(name = "Guest", greeting = `Hello, ${name}!`) {
    return greeting;
  }
  
  console.log(greet()); // Output: Hello, Guest!
  console.log(greet("Akshay")); // Output: Hello, Akshay!

  
//-------------------------------- 

function getUserInfo({ name = "Guest", age = 30 } = {}) {
    return `${name} is ${age} years old.`;
  }
  
  console.log(getUserInfo()); // Output: Guest is 30 years old.
  console.log(getUserInfo({ name: "Akshay" })); // Output: Akshay is 30 years old.
  console.log(getUserInfo({ age: 65 })); // Output: Guest is 65 years old.
  