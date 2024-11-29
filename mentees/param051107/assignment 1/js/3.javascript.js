
const countries = ["Japan", "Brazil", "Canada", "Germany", "Australia"];


console.log("List of countries:");
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}


function printMultiplicationTable(number) {
    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}


printMultiplicationTable(5);
