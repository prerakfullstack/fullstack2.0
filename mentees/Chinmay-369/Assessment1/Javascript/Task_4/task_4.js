function evenOdd(num){
  if (num % 2 === 0) {
          console.log(num,"is Even");
  } else {
    console.log(num,"is Odd");
  }
}
evenOdd(6);
evenOdd(5);

//2
function weekDay(number) {
  switch (number) {
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
      console.log("Invalid!!! Enter b/w 1 - 7");
      break;
  }
  
}
weekDay(1);
weekDay(8);