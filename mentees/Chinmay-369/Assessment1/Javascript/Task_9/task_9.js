//1
function dateTime() {
  let date = new Date();
  console.log(date);
}
dateTime();

//2
function myBirthday(month, day) {
  let today = new Date();
  let currentYear = today.getFullYear();
  let birthdayThisYear = new Date(currentYear, month - 1, day);

  if (birthdayThisYear < today) {
      birthdayThisYear.setFullYear(currentYear + 1);
  }

  let diffTime = birthdayThisYear - today;
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let monthsLeft = birthdayThisYear.getMonth() - today.getMonth();
  let daysLeft = (diffDays % 30);

  if (monthsLeft < 0) {
      monthsLeft += 12;
      daysLeft = Math.max(daysLeft - 30, 0);
  }

  return { months: monthsLeft, days: daysLeft };
}

let result = myBirthday(9, 27);
console.log("Months until next Birthday: " + result.months + ", Days until next Birthday: " + result.days);
