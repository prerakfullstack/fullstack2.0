// function addition(a,b) {
//     return a + b;
// }

// function subtract(a,b) {
//     return a - b;
// }

// function numsEqual(a,b) {
//     if (a === b) return "Numbers are equal";
//     else return "Numbers are not equal"
// }

// function checkIfBothGreaterZero(a,b) {
//     if (a > 0 && b > 0) return "Numbers are Greater then Zero";
//     else return "Numbers are not Greater then Zero"
// }

// console.log(addition(5,10));
// console.log(subtract(15,10));
// console.log(numsEqual(1,10));
// console.log(checkIfBothGreaterZero(-1,10));


// Optimize Code
function checkAll(a,b,operation) {
    switch (operation) {
        case "Add":
            return a + b;
            break;
        case "Subtract":
            return a - b;
            break;
        case "Equal":
            if (a === b) return "Numbers are equal";
            else return "Numbers are not equal";
            break;
        case "GreaterThenZero":
            if (a > 0 && b > 0) return "Numbers are Greater then Zero";
            else return "Numbers are not Greater then Zero";
            break;
        default:
            return a,b;
    }

}

console.log(checkAll(5,10,"Add"));
console.log(checkAll(15,10,"Subtract"));
console.log(checkAll(15,10,"Equal"));
console.log(checkAll(15,10,"GreaterThenZero"));