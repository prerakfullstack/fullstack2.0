// 1. Create two arrays and merge them using the spread operator
const array1 = [1, 2, 3, 4, 5]; // First array containing five numbers
const array2 = [6, 7, 8];       // Second array containing three more numbers

const mergedArray = [...array1, ...array2]; // Merge both arrays
console.log(`Merged Array: ${mergedArray}`); // Logs: Merged Array: 1,2,3,4,5,6,7,8

// 2. Construct an object with name, age, and programming technologies
const person = {
    name: 'Test User',
    age: 28,
    languages: ['Java', 'JavaScript', 'React JS']
};

// Use the spread operator to copy the object and modify the age property
const updatedPerson = {
    ...person,
    age: 30 // Modifying the age property
};

console.log(`Original Person:`, person);        // Logs the original person object
console.log(`Updated Person:`, updatedPerson);   // Logs the updated person object