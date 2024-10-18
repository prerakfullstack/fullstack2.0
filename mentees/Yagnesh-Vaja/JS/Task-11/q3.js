
const uniqueValuesSet = new Set([1, 2, 3, 4, 5]);


const checkValueInSet = (value) => {
    return uniqueValuesSet.has(value) ? `${value} exists in the set` : `${value} does not exist in the set`;
};


console.log(checkValueInSet(3)); 
console.log(checkValueInSet(10)); 
