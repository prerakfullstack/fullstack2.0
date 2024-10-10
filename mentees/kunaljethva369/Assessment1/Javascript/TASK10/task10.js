const arrowFn = (a,b) =>{
    return a + b;
}

console.log(arrowFn(10,20));

const personDetail = `{
    "name":"kunal",
    "age": 24,
    "interests": "Coding"
}`;


const user = JSON.parse(personDetail)

console.log(user.age);