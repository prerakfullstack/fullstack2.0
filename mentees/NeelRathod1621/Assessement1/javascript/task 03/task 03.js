let countryArray = ["India", "USA", "UK", "Canada", "UAE"];

for (var i = 0; i < countryArray.length; i++) {
    console.log(countryArray[i]);
}

function table(num) {
    for (var j = 1; j <= 10; j++) {
        console.log(`${num} * ${j} = ${num * j}`);
    }
}

table(10)