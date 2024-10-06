function evenAndOdd(number) {
    if (number % 2 == 0) {
        console.log(number + ' given is even')
    } else[
        console.log(number + ' given is odd')
    ]
}

function categorizeDay(day) {
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
            break;
    }
}