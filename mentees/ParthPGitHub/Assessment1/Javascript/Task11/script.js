// 1. Store a user’s name in LocalStorage and retrieve it
const storeUserName = (name) => {
    localStorage.setItem('userName', name); // Store the name in LocalStorage
};

const displayUserName = () => {
    const name = localStorage.getItem('userName'); // Retrieve the name
    if (name) {
        console.log(`User Name: ${name}`); // Display the name
    } else {
        console.log('No user name found in LocalStorage.');
    }
};

// Example usage
storeUserName('TestUser');
displayUserName();

// 2. Create a Map to store countries and their capitals
const countryCapitalMap = new Map([
    ['India', 'Delhi'],
    ['France', 'Paris'],
    ['Canada', 'Ottawa']
]);

const getCapital = (country) => {
    return countryCapitalMap.get(country) || 'Capital not found'; // Return capital or a message
};

// Example usage
console.log(`Capital of India: ${getCapital('India')}`); // Logs: Capital of India: Delhi

// 3. Create a Set containing five unique values
const uniqueValuesSet = new Set(['apple', 'banana', 'orange', 'grape', 'kiwi']);

const checkValueExists = (value) => {
    return uniqueValuesSet.has(value); // Check if the value exists in the Set
};

// Example usage
console.log(`Does 'mango' exist in the set? ${checkValueExists('mango')}`);
console.log(`Does 'banana' exist in the set? ${checkValueExists('banana')}`);