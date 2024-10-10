let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8];

let arr3 = [...arr1,...arr2];
console.log(arr3);

const person = {
    name:"Kunal",
    age: 23,
    favLang: ['javascript','nodejs','python']
}

let PersonObj = {...person};

PersonObj.age = 24;
console.log(person.age);
console.log(PersonObj.age);

