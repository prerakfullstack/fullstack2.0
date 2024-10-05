{
  console.log("***********Task 3***********");

  const countries = ["USA", "Canada", "Germany", "Japan", "Australia"];

  console.log(countries);

  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
  }

  function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }

  printMultiplicationTable(5);

  console.log("************Task 3 ended************");
}
