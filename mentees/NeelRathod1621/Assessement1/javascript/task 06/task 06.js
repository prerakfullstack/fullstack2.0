const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8];

const newArray = [...array1, ...array2];

console.log(newArray);

const user = {
    name: "Neel",
    age: 24,
    favoriteLanguages: ["JavaScript", "HTML", "CSS"]
};

const updatedUser = { ...user, age: 25 };

console.log(updatedUser); 