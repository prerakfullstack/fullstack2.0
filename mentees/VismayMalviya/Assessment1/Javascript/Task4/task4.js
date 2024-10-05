function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`The Number ${num} is Even`);
    } else {
        console.log(`The Number ${num} is Odd`);
    }
}

checkEvenOdd(6);
checkEvenOdd(9);

function whatIsTheDay(dayNum) {
    switch (dayNum) {
        case 1:
            console.log("It's Monday");
            break;
        case 2:
            console.log("It's Tuesday");
            break;
        case 3:
            console.log("It's Wednesday");
            break;
        case 4:
            console.log("It's Thursday");
            break;
        case 5:
            console.log("It's Friday");
            break;
        case 6:
            console.log("It's Saturday");
            break;
        case 7:
            console.log("It's Sunday");
            break;
        default:
            console.log("We encountered a Invalid day number. Please enter a valid number between 1 and 7.");
    }
}

whatIsTheDay(1);
whatIsTheDay(3);
whatIsTheDay(8);