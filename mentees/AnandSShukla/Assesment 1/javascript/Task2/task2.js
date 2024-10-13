
const AddNumbers = (a, b) => {
    let addition = a+b;
    let subtraction = b-a;
    let areEqualNumbers = a==b ;
    if(a>=0 && b>=0)  console.log('both numbers greater than zero')

    console.log(`Sum: ${addition}`);
    console.log(`Difference: ${subtraction}`);
    console.log(`Are the two numbers equal? ${areEqualNumbers}`);
}

AddNumbers(10,45);

// output
// both numbers greater than zero
// Sum: 55
// Difference: 35
// Are the two numbers equal? false