// Q1.
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8];

let newArray = [...array1, ...array2];
console.log(newArray);

// Q2.
const personalDetails = {
    name: "Dheeraj",
    age: 20,
    favLangs: ["Java", "Javascript", "C"]
};

const copy = {
    ...personalDetails, 
    age: 21
}
console.log(copy);
