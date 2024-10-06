// IF else condition starts here ::
function evenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOdd(8));
console.log(evenOdd(11));

// switch statement starts here ::
function getDayOfWeek(dayNumber) {
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

getDayOfWeek(1); // Logs: Monday
getDayOfWeek(5); // Logs: Friday
getDayOfWeek(8); // Logs: Invalid day number. Please enter a number between 1 and 7.
