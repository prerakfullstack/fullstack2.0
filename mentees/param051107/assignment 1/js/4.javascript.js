function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}


checkEvenOrOdd(5); 
checkEvenOrOdd(8); 



function categorizeDay(dayNumber) {
    
    dayNumber = Number(dayNumber);
    
    if (isNaN(dayNumber)) {
        console.log("Invalid input. Please enter a number.");
        return;
    }

    switch (dayNumber) {
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
    }
}


categorizeDay('3');
categorizeDay(8);   



categorizeDay(3); 
categorizeDay(6); 
categorizeDay(8); 
