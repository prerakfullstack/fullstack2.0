let countries = ["USA", "India", "Australia", "Germany", "Japan"];


 for (let country of countries)
   {
    console.log(country);
   }
   // used for of loop
    


  function printMultiplicationTable(number) {
    for (let i = 1; i <= 10 ; i++) {
        const result = number * i;
        console.log(number + " x " + i + " = " + result);
    }
}

printMultiplicationTable(9);