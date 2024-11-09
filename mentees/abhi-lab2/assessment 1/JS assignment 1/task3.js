const countries = ["India", "USA", "Canada", "Japan", "France", "England", "Germany", "China"];

console.log("Countries:")
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}

function printMultiplicationTable(number) {
    console.log(`Multiplication table for ${number}:`)
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}

printMultiplicationTable(5);

console.log("Countries :");
countries?.forEach(country => console.log(country))

function printMultiplicationTableWhile(number) {
    console.log(`Multiplication table for ${number}:`)
    let i = 1
    while (i <= 10) {
        console.log(`${number} x ${i} = ${number * i}`)
        i++
    }
}

printMultiplicationTableWhile(7);