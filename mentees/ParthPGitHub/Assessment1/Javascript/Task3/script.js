// 1. Create an array containing the names of five countries
const countries = ['India', 'Australia', 'USA', 'UK', 'Germany'];

// 2. Write a loop that iterates over the array and logs each country name to the console
countries.forEach(country => {
    console.log(country);
});

// 3. Write a function that prints the multiplication table of a given number using a loop
const printMultiplicationTable = (number, limit = 10) => {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= limit; i++) {
        const result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
};

// Example usage
printMultiplicationTable(5); // You can change the number to print the table for a different number