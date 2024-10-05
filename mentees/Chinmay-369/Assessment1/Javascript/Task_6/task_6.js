// console.log("jsn");

// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8];

// let array = [...array1,...array2];

// console.log(array);

//2

let object1= {
  name: 'Chinmay',
  language:['JavaScript','Java', 'C++'],
  age:20,
}

let object2 = {
  ...object1,
  age:24,
}
console.log("object1: ",object1);
console.log("object2: ",object2);
