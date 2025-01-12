// Shorthand Object Properties in JavaScript

// Shorthand object properties, introduced in ES6, 
// provide a cleaner and more concise syntax for creating objects.
//  This feature allows you to skip redundant key-value assignments when the key and value have the same name.

// When the variable name matches the property name,
// you can use the shorthand syntax by omitting the explicit key: value pair.

// Without shorthand properties:

const name = "Akshay";
const age = 65;

const person = {
  name: name,
  age: age,
};

console.log(person); // Output: { name: 'Akshay', age: 65 }

// -----------------------------

// With shorthand properties:

const name1 = "Akshay";
const age1 = 65;

const person1 = { name, age };

console.log(person); // Output: { name: 'Akshay', age: 65 }


// ---------------------------

// When passing multiple variables to a function,
// shorthand properties make the object creation cleaner.

const createPerson = (name, age) => ({ name, age });

const person2 = createPerson("Akshay", 65);
console.log(person2); // Output: { name: 'Akshay', age: 65 }


// ----------------------------
// Shorthand properties pair nicely with object destructuring,
//  making code more compact and readable.

const person4 = { name4: "Akshay", age4: 65 };

// Destructuring with shorthand
const { name4, age4 } = person;

console.log(name4); // Output: Akshay
console.log(age4); // Output: 65


