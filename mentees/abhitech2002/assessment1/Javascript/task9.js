function logCurrentDateTime() {
  const now = new Date();
  console.log(
    `Current Date and Time: ${now.toDateString()} ${now.toLocaleTimeString()}`
  );
}

logCurrentDateTime();

function daysUntilBirthday(birthday) {
  const today = new Date();
  const nextBirthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const timeDifference = nextBirthday - today;

  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft;
}

const myBirthday = new Date("2023-07-28");
console.log(`Days until next birthday: ${daysUntilBirthday(myBirthday)}`); // Output: 295
