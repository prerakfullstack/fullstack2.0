function numIsEvenOdd(num){
    num % 2 === 0 ? console.log("Number Is Even") : console.log("Number Is ODD");
}

numIsEvenOdd(6);

function weekDay(num){
    switch(num){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuseday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thurday");
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
            console.log("Invalid number Passed, Range between 1-7");
    }
}

weekDay(5);