function evenOrOdd(number){
    if(number % 2 === 0){
        console.log("The given number is even.");
    }
    else{
        console.log("The given number is odd")
    }
}
evenOrOdd(5);
evenOrOdd(6);



function dayOfWeek(day){
    switch(day){
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
                                        console.log("Invalid day");
    }
}
dayOfWeek(2);
dayOfWeek(10);