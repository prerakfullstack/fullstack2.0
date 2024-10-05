// for loop
const country = ["India", "Australia", "Europe", "France", "USA"];
let textFor = "";
for (let i = 0; i < country.length; i++) {
    textFor += country[i] + ",";
    console.log(textFor);
}

// while loop
let text = "";
let i = 0;
while (i < country.length) {
    text += country[i] + ",";
    i++;
    console.log(text);
}

// function of multiplication
function multiplication(num) {
    for (let i = 0; i <= 5; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

console.log(multiplication(4))