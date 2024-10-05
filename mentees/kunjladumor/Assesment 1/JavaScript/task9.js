{
  console.log("***********Task 9***********");

  function showCurrentDateTime() {
    const now = new Date();
    console.log(`Current Date and Time: ${now}`);
  }

  function daysUntilNextBirthday(birthday) {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextBirthday = new Date(
      currentYear,
      birthday.getMonth(),
      birthday.getDate()
    );

    if (now > nextBirthday) {
      nextBirthday.setFullYear(currentYear + 1);
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const daysLeft = Math.round((nextBirthday - now) / oneDay);

    return daysLeft;
  }

  showCurrentDateTime();
  const myBirthday = new Date("2025-01-16");
  console.log(`Days until next birthday: ${daysUntilNextBirthday(myBirthday)}`);

  console.log("************Task 9 ended************");
}
