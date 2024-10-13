
function logPersonDetails(person) {
    const { firstName, lastName, age } = person; 
    console.log(`The person's name is ${firstName} ${lastName} and they are ${age} years old.`);
}

const person = {
    firstName: 'Anand',
    lastName: 'Shukla',
    age: 25
};

logPersonDetails(person);


function sumThreeNumbers(numbers) {
    const [num1, num2, num3] = numbers;
    return num1 + num2 + num3;
}

const numbersArray = [5, 10, 15];
console.log(sumThreeNumbers(numbersArray)); 


// output i got
// The person's name is Anand Shukla and they are 25 years old.
// 30