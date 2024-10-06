// Map
const countryCapitals = new Map([
    ['India', 'New Delhi'],
    ['Japan', 'Tokyo'],
    ['France', 'Paris']
]);

function getCapital(country) {
    return countryCapitals.get(country) || 'Capital not found';
}

console.log(getCapital('India')); // Output: New Delhi

// Set
const uniqueValues = new Set([10, 20, 30, 40, 50]);

function valueExists(value) {
    return uniqueValues.has(value);
}

console.log(valueExists(30)); // Output: true