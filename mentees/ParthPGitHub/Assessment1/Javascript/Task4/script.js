// 1. Function to check if a number is even or odd
const checkEvenOdd = (number) => {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
};

// Example usage of the checkEvenOdd function
checkEvenOdd(10); // Logs "Even"
checkEvenOdd(7);  // Logs "Odd"

// 2. Function to categorize a day of the week using a switch statement
const categorizeDay = (day) => {
    switch (day) {
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
            console.log("Invalid day. Please enter a number between 1 and 7.");
    }
};

// Example usage of the categorizeDay function
categorizeDay(3); // Logs "Wednesday"
categorizeDay(6); // Logs "Saturday"
categorizeDay(8); // Logs "Invalid day. Please enter a number between 1 and 7."