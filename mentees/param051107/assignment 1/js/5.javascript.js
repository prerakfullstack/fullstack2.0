function logPersonDetails({ firstName, lastName, age }) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

logPersonDetails(person); 



function sumThreeNumbers([num1, num2, num3]) {
    return num1 + num2 + num3;
}


const numbers = [5, 10, 15];
console.log(sumThreeNumbers(numbers)); 
