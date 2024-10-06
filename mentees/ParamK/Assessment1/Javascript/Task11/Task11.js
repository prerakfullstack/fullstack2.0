const storeUserName = (user) => {
    localStorage.setItem("username", user);
}
storeUserName("Marcus");


let countriesMap = new Map([
    ["India", "New Delhi"],
    ["France", "Paris"],
    ["Japan", "Tokyo"]
]
)
const getCapital = (country) => {
    countriesMap.forEach((val, key) => {
        if (country === key) {
            console.log(`${key}'s capital is ${val}`);
        }
    })
}
getCapital("France");

let mySet = new Set(['apple', 'banana', 'mango', 'grapes', 'orange']);

const checkSetValue = (value) => {
    return mySet.has(value);
}
console.log(checkSetValue("mango"));

