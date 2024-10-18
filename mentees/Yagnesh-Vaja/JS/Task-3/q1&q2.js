
const countries = ["India", "Canada", "Australia", "Germany", "Japan"];


for (let i = 0; i < countries.length; i++) {
    console.log(`Country ${i + 1}: ${countries[i]}`);
}


function printMultiplicationTable(number) {
    console.log(`Multiplication Table of ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}


printMultiplicationTable(5);
