function takeObj(personObj) {
    const { firstName, lastName, age } = personObj;
    console.log(`${firstName} ${lastName} is good person and his age is ${age}`);
}

const personObj = {
    firstName: "Harsh",
    lastName: "Helaiya",
    age: "21"
}
takeObj(personObj)


function takeArray(numberArray) {
    const [num1, num2, num3] = numberArray
    const sumResult = num1 + num2 + num3
    console.log(sumResult);
}

const numberArray = [1, 5, 10]
takeArray(numberArray)