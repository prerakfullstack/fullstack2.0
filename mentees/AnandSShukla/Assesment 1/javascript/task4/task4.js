function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEvenOdd(5);
checkEvenOdd(8);

function dayOfWeek(day) {
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
      console.log("Invalid day");
  }
}

dayOfWeek(1);
dayOfWeek(4);
dayOfWeek(7);
dayOfWeek(9);


// output i got is 
// Odd
// Even
// Monday
// Thursday
// Sunday
// Invalid day