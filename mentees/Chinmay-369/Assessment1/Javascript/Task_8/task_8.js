// 1
let array = [10,20,30,40,50,60,70,80,90,100];

array.sort (function(a,b){
  return b-a;
})
console.log("Array in Descending:",array);

// Filter out numbers greater than 50.
for (let i= 0; i < array.length; i++) 
  {
  if (array[i] > 50) {
    console.log(array[i]);
  }
  }
// Find the sum of all numbers using the `reduce` method.
function sum(accumulator,currentValue)
{
  return accumulator + currentValue;
}
let arraySum = array.reduce(sum,0);
console.log('sum of array:',arraySum );


// 2. Use builtin methods to round, ceil, and floor a decimal number.
let num = 368.84575;
console.log("Round:",Math.round(num));
console.log("Ceil:",Math.ceil(num));
console.log("Floor:",Math.floor(num));

