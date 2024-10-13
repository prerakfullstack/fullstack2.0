function checkEvenOddNumber(num) {
    if (num % 2 == 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }

    switch (num) {
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        case 7:
            console.log("Sunday")
            break;

        default:
            console.log("Number is greater than 7")
            break;
    }
}

checkEvenOddNumber(4);
checkEvenOddNumber(5);