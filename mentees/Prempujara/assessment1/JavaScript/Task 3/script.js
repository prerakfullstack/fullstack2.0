let countries = ["India", "Pakistan", "Sri Lanka", "Nepal", "Bangladesh"];

for (let country of countries){
    console.log(country);
}

function multiplication(number){
    for (let i = 1; i <= 10; i++){
        console.log(`${number} x ${i} = ${number * i}`);
}
}

multiplication(6);