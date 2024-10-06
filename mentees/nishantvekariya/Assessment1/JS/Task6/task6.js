const numbersArray1 = [1, 2, 3, 4, 5];
const numbersArray2 = [6, 7, 8];

const mergedArray = [...numbersArray1, ...numbersArray2];
console.log("Merged Array:", mergedArray);

const personObject = {
  name: "Nishant",
  age: 25,
  favoriteLanguages: ["JavaScript", "React", "Node"],
};

const updatedPersonObject = {
  ...personObject,
  age: 26,
};

console.log("Original Person Object:", personObject);
console.log("Updated Person Object:", updatedPersonObject);
