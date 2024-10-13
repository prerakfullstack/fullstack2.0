const arr1 = ["1", "2", "3", "4", "5"];
const arr2 = ["6", "7", "8"];

const mergedArr = [...arr1, ...arr2];
console.log("Merged Array ", mergedArr);

const obj = {
  name: "Anand",
  age: 25,
  favouriteProgramming: ["JS", "React", "Nodejs"],
};
console.log("obj ", obj);

const obj2 = { ...obj, age: 30 };
console.log("obj2 ", obj2);

// Output that i got is
// Merged Array  [
//   '1', '2', '3',
//   '4', '5', '6',
//   '7', '8'
// ]
// obj  {
//   name: 'Anand',
//   age: 25,
//   favouriteProgramming: [ 'JS', 'React', 'Nodejs' ]
// }
// obj2  {
//   name: 'Anand',
//   age: 30,
//   favouriteProgramming: [ 'JS', 'React', 'Nodejs' ]
// }
