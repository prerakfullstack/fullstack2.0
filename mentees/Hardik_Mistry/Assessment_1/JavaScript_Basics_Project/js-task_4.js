

function logEvenOddNum(num1) {
    if (parseInt(num1) % 2 == 0) {
        console.log(num1 + " is even Number.");
    } else {
        console.log(num1 + " is odd Number.");
    };
};



logEvenOddNum(5);
logEvenOddNum(4);

function getDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        case 7:
            dayName = 'Sunday';
            break;
        default:
            dayName = 'Invalid day number. Please enter a number between 1 and 7.';
    };
    return dayName;
};

const dayNumber = 3;
console.log(getDayOfWeek(dayNumber));
