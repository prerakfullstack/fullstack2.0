// let object = {
//   firstName:'Chinmay',
//   lastName:"Bhole",
//   age:20
// }
// function details({firstName,lastName,age})
// {
//   console.log(`Name: ${firstName} ${lastName}, ${age}`);

// }
// details(object);

//2
let array =[1,2,3];
function SumOfArray ()
{
  let [num1, num2, num3] = array;
  addition = num1 + num2 + num3;
  console.log("Sum of Array:",addition);
}
SumOfArray();