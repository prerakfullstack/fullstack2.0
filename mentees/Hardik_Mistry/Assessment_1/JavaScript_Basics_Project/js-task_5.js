function logPersonDetails(personDetail) {
    const { firstName, lastName, age } = personDetail;
    console.log(`${firstName} ${lastName} is ${age} years old.`);
};

const personDetail = {
    firstName: "Hardik",
    lastName: "Mistry",
    age: "27"
};

logPersonDetails(personDetail);


const numbers = [1, 2, 3];
function sumOfAllNumbers(numbersArray) {
    const [num1, num2, num3] = numbersArray;
    return num1 + num2 + num3;
};

console.log("total of three numbers ==>>", sumOfAllNumbers(numbers));
;