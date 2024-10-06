let countries = ["USA", "Canada", "Australia", "India", "Germany"];

for (let i = 0; i < countries.length; i++) {
  console.log("Country:", countries[i]);
}

function printMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

printMultiplicationTable(5);
