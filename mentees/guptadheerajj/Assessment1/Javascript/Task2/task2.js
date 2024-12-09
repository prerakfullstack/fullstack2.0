function add (a, b) {
    console.log(`Addition is: ${a + b}`);
}
function subtract (a, b) {
    console.log(`Subtraction is: ${a - b}`);
}
function isEqual (a, b) {
    if(a == b) {
        console.log("a equals b");
    } else {
        console.log("a not equal to b");
    }
}
function isGreaterThanZero (a, b) {
    if(a > 0 && b > 0) {
        console.log("a abd b are both greater than zaro");
    } else {
        console.log("Either one of them, or both are not greater than zero");
    }
}

add(2, 3);
subtract(4, 1);
isEqual(6, 6);
isGreaterThanZero(4, 9);