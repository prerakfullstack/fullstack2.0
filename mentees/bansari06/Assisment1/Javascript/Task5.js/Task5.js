function PersonDetails({ firstName, lastName, age }) {
    console.log(`Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`);
}


const person = {
    firstName: 'Bansari',
    lastName: 'Bhalala',
    age: 18
};

PersonDetails(person);


function sumThreeNumbers([num1, num2, num3]) {
    return (num1 + num2 + num3);// aya console.log naikhu to undefined aaivu 
}

// Example 
const numbers = [5, 10, 15];


const total = sumThreeNumbers(numbers);
console.log("The sum is: " + total);
