// 1. Array Contains Five Countries.
const countries = ["Abu", "UK", "India", "Dubai", "USA"];

// 2. Loop Iterates over an Array.
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

// 3. Multiplication Table.
function multiplicationTable(number) {
  console.log(`Multiplication Table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

multiplicationTable(5);
