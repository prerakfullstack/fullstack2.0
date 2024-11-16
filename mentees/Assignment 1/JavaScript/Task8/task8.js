
// # Function for sum of array
// function sumarray(params) {
//     let sum = 0;
//     params.forEach(element => {
//         sum+=element;
//     });
//     return sum;
// }

let arr = [ 9,39,75,62,44,2,69,1100 ,42,44 ]

//sort function sorts in lexicographys
let sortedarray = arr.sort((a,b) => a - b)
let filteredarray = sortedarray.filter((a) => a>50)


console.log(sortedarray);

console.log(filteredarray);

// console.log(sumarray(sortedarray));
console.log(sortedarray.reduce((a,b)=> (a+b)));

let decnumber = 744.803

console.log(Math.round(decnumber));
console.log(Math.floor(decnumber));
console.log(Math.round(decnumber));

