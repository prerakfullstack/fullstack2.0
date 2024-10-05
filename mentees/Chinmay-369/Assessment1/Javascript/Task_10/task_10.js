//1
// let add = (num1,num2) =>{
//   return num1 + num2;
// }
// console.log(add(5,3));

// 2. Create a JSON object representing a user’s profile with properties like name, age, and
//  interests. Parse the JSON object and log one of the properties to the console.

let jsonObject = {
  "name" : "Chinmay",
  "age" : 20,
  "interests" : ["Cricket","Football"]
}
console.log("Original object:",jsonObject);

let jsonString = JSON.stringify(jsonObject);
console.log("JSON STRING:",jsonString);

let jsonParse = JSON.parse(jsonString);
console.log("JSON Parse:",jsonString);

console.log(jsonParse.name);
console.log(jsonParse.age);
