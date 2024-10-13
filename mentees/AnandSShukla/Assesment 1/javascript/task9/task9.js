// Task 9: Working with Dates
// Objective: Use JavaScript’s `Date` object to manipulate dates.
// 1. Write a function that logs the current date and time.
// 2. Write another function that calculates how many days are left until your next birthday.
(function DateManipulate() {
  const d = new Date();
  console.log("todays date is ", d.toString());
})();

function daysUntilNextBirthday(birthday) {
  const today = new Date();
  const currentYear = today.getFullYear();

  let nextBirthday = new Date(
    currentYear,
    birthday.getMonth(),
    birthday.getDate()
  );

  if (today > nextBirthday) {
    nextBirthday.setFullYear(currentYear + 1);
  }
  const differenceInTime = nextBirthday.getTime() - today.getTime();

  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  console.log(`Days until next birthday: ${differenceInDays}`);
}

const myBirthday = new Date(2000, 10, 25);
daysUntilNextBirthday(myBirthday);
