let person = {
    fName: "Jhon",
    lName: "Doe",
    age: 24
}

function personDetail(personObj) {
    let { fName,lName,age } = personObj;
    console.log(`Hi My Full Name is ${fName} ${lName} and my Age is ${age}`);
}

personDetail(person);


const numbers = [3,5,7];

function sumOfThree([a,b,c]) {
    return a + b + c;
}

console.log(sumOfThree(numbers));
