function userDetails({ firstName, lastName, age }) {
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
}

userDetails({ firstName: 'Neel', lastName: 'Rathod', age: 24, });

function sumThreeNumbers([num1, num2, num3]) {
    console.log(num1 + num2 + num3);
}

sumThreeNumbers([5, 10, 15]);