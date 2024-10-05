function personDetails({ firstName, lastName, age }) {
    console.log(`Full Name: ${firstName} ${lastName}, Age: ${age}`);
}

const person1 = {
    firstName: "Vismay",
    lastName: "Malviya",
    age: 22,
};

const person2 = {
    firstName: "Darshit",
    lastName: "Kachhadiya",
    age: 19
};

personDetails(person1);
personDetails(person2);

function sumOfThree ([num1, num2, num3]) {
   return num1 + num2 + num3;
}

const nums = [3, 6, 9];
const sumNums = sumOfThree(nums);
console.log(`Sum of the Three Numers: ${sumNums}`);