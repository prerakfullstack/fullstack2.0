// EVen and odd number
function EvenOrOdd(num) {
    if (num % 2 == 0) {
        return "Number is Even"
    } else {
        return "Number is Odd"
    }
}

console.log(EvenOrOdd(12)) // Output: Number is Even

// Swicth case
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Mondat";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            break;
    }
}

console.log(getDayOfWeek(5));  // Output: Friday