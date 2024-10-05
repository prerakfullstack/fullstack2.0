const countries = ["India", "USA", "Russia", "Sweden", "Japan"];

console.log("List of Countries:");
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}

function numTable (num) {
    console.log("Multiplication Table for:", num);
    for (let i = 0; i<=10; i++) {
        const Multiplication = num * i;
        console.log(`${num} x ${i} = ${Multiplication}`);
    }
}

numTable(9);