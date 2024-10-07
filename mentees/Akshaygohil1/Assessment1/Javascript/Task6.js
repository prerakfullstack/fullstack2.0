const arr1 = [1, 5, 67, 2, 10]
const arr2 = [5, 8, 6]

let mergedArray = [...arr1, ...arr2]
console.log(mergedArray);

let detailsObj = {
    name: "Akshay G",
    age: 23,
    favoriteProgramming: ["JavaScript", "React", "node"]
}

let updatedDetailsObj = {
    ...detailsObj,
    age: 24
}
console.log(detailsObj, 'detailsObj');
console.log(updatedDetailsObj, 'updatedDetailsObj');
