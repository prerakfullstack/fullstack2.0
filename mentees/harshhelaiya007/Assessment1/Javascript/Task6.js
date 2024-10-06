const array1 = [1, 5, 67, 2, 10]
const array2 = [5, 8, 6]

let mergedArray = [...array1, ...array2]
console.log(mergedArray);

let detailsObj = {
    name: "Harsh",
    age: 21,
    favoriteProgramming: ["Js", "React", "Vue"]
}

let updatedDetailsObj = {
    ...detailsObj,
    age: 22
}
console.log(detailsObj, 'detailsObj');
console.log(updatedDetailsObj, 'updatedDetailsObj');
