const firstArray = [1, 2, 3, 4, 5]
const secondArray = [6, 7, 8]
const thirdArray = [9, 10, 11, 12, 13, 14, 15];


const mergedArray = [...firstArray, ...secondArray] // spreading

console.log("First array:", firstArray)
console.log("Second array:", secondArray)
console.log("Merged array:", mergedArray)


const programmer = {
    name: "Abhi",
    age: 28,
    favoriteProgrammingLanguages: ["JavaScript", "Python", "Go", "Java"]
}


const updatedProgrammer = {
    ...programmer,
    age: 28
}

console.log("Original programmer object:", programmer);
console.log("Updated programmer object:", updatedProgrammer)


function sum(...numbers) {
    const res = numbers.reduce((total, num) => total + num, 0)
    console.log('res: ', res);
    return res
}

console.log("Sum of merged array elements:", sum(...mergedArray))


const personalInfo = {
    city: "Mumbai",
    hobbies: ["reading", "hiking"]
}

const combinedInfo = {
    ...programmer,
    ...personalInfo
}

console.log("Combined information:", combinedInfo)