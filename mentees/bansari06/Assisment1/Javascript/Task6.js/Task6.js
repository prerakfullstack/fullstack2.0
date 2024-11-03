let array1=[1,2,3,4,5];
let array2=[6,7,8,9,0];

let mergedarray=[...array1, ...array2]

console.log(mergedarray);


let person={name:'Bansari',age:'20',favouriteprogramminglanguages:['c','python','javascript']};
   
    let updatedperson={...person ,age:18};
    // used spread operator and updated age 
    console.log(updatedperson);