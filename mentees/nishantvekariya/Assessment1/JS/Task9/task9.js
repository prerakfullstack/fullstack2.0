function logCurrentDateTime() {
  const currentDateTime = new Date();
  console.log("Current Date and Time:", currentDateTime.toString());
}

function daysUntilBirthday(birthday) {
  const today = new Date();
  const nextBirthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  if (today > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const timeDiff = nextBirthday - today;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  console.log(`Days until next birthday: ${daysDiff}`);
}

logCurrentDateTime();
daysUntilBirthday(new Date(1999, 5, 26));
