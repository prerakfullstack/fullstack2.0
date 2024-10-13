function mergeNumberArray(arr1, arr2) {
    return [...arr1, ...arr2];
};
const numArray1 = [1, 2, 3, 4, 5];
const numArray2 = [6, 7, 8, 9];
console.log("merged Array  ==>>>>", mergeNumberArray(numArray1, numArray2));


function changeAge(userDetails, ageNum) {
    return { ...userDetails, age: ageNum };
};


const personDetails = {
    name: "Hardik Mistry",
    age: "27",
    favoriteProgrammingLanguages: [
        "javascript",
        "java",
        "python"
    ]
};
console.log("changeAge  ==>>>>", changeAge(personDetails, "18"));
