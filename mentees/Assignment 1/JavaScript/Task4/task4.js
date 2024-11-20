
function evenOdd(num) {
    num%2 == 0 ? console.log('Given Number \'' + num + '\' is Even..') : console.log('Given Number \'' + num + '\' is Odd..');     
}

function weekName(week, num){
    console.log(num + ':' + week);
}

function dayOfWeek(num) {
    if (num < 1 || num > 7) {
        console.log('Enter Valid Number');
        return;
    }
    switch (num) {
        case 1:
            weekName('Monday', 1)
            break;

        case 2:
            weekName('Tuesday', 2)
            break;

        case 3:
            weekName('Wednessday', 3)
            break;

        case 4:
            weekName('Thursday', 4)
            break;

        case 5:
            weekName('Friday', 5)
            break;

        case 6:
            weekName('Satureday', 6)
            break;

        case 7:
            weekName('Sunday', 7)
            break;


        
        default:
            break;
    }
}

console.log('Check The number is even or odd');
evenOdd(3)

console.log('\n\nDay of the Week');
dayOfWeek(3)