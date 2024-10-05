{
  console.log("***********Task 4***********");

  function checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log("Even Number " + number);
    } else {
      console.log("Odd Number " + number);
    }
  }

  checkEvenOdd(4);
  checkEvenOdd(7);

  function categorizeDay(dayNumber) {
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
        console.log("Invalid day number");
    }
  }

  categorizeDay(1);
  categorizeDay(5);
  categorizeDay(8);

  console.log("************Task 4 ended************");
}
