
function sumOfThree(array) {
    let [a, b, c] = array;
    
    return a+b+c
}


const data = {
    firstName : 'Dhruv', 
    lastName : 'Pithva',
    age : 19
};

const {firstName , lastName, age} = data;

console.log('Name is ' + firstName + ' ' + lastName + ' and age is ' + age);

let threeNum = [23,45,67]

console.log('\n\nSum of Three Number: ' + threeNum + ' is ' + sumOfThree(threeNum));
