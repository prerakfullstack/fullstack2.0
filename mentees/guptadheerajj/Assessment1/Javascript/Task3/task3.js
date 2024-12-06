let countries = ["India", "Japan", "Russia", "France", "Germany"];

for(let e of countries) {
    console.log(e);
}

function printTable (n) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}

printTable(4);