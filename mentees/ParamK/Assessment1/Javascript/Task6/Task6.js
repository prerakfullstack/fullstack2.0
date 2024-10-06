let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8];
let newArr = [...arr1, ...arr2];
console.log(newArr);

let person = {
    name: "John",
    age: 24,
    favouriteLanguages: ["Javascript", "Python", "Java"]
}
let newPerson = {
    ...person,
    age: 30
}
console.log(newPerson);