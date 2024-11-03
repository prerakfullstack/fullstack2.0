let number =6
function checkEvenOrOdd()
 {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkEvenOrOdd(6) 

// switch case
let weekdays = 6; 

switch (weekdays) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");
        break;
}