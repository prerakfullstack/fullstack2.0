
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8];


const mergedArray = [...array1, ...array2];

console.log(mergedArray); 




const person = {
    name: 'Alice',
    age: 25,
    favoriteLanguages: ['JavaScript', 'Python', 'Ruby']
};


const updatedPerson = {
    ...person,
    age: 26
};

console.log(updatedPerson);
