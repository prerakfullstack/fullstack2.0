const checkEvenOdd = (number) => {
    if (number % 2 == 0) {
        return "The number is even";
    }
    else {
        return "The number is odd";
    }
}
console.log(checkEvenOdd(5));

const getDay = (number) => {
    switch (number) {
        case 1: console.log("Monday");
            break;
        case 2: console.log("Tuesday");
            break;
        case 3: console.log("Wednesday");
            break;
        case 4: console.log("Thursday");
            break;
        case 5: console.log("Friday");
            break;
        case 6: console.log("Saturday");
            break;
        case 7: console.log("Sunday");
            break;
        default: console.log("Please enter a valid number");
    }
}
getDay(4);
