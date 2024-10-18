
//Question-1
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd");
    }
}

checkEvenOdd(4);
checkEvenOdd(7);


//Question-2
function getDayOfWeek(day) {
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
            console.log("Thrusday");
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
            console.log("Invalid Day");

    }
}


getDayOfWeek(1);
getDayOfWeek(2);
getDayOfWeek(3);
getDayOfWeek(4);
getDayOfWeek(5);
getDayOfWeek(6);
getDayOfWeek(7);
getDayOfWeek(8);


