
const countryCapitalMap = new Map([
    ["India", "New Delhi"],
    ["France", "Paris"],
    ["Japan", "Tokyo"]
]);

const getCapital = (country) => {
    return countryCapitalMap.get(country) || "Capital not found";
};


console.log(getCapital("France")); 
console.log(getCapital("Germany"));
