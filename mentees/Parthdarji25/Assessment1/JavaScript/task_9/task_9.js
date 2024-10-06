// Function to log the current date and time
function logCurrentDateTime() {
  const now = new Date();
  document.getElementById(
    "currentDate"
  ).innerHTML = `Current Date and Time: <span class="highlight">${now}</span>`;
  console.log(`Current Date and Time: ${now}`);
}

// Function to calculate days left until next birthday
function dayRemainingNextBirthday(birthday) {
  const now = new Date();
  const currentYear = now.getFullYear();

  // Set the next birthday year as the current year
  let nextBirthday = new Date(
    currentYear,
    birthday.getMonth(),
    birthday.getDate()
  );

  // If the birthday for the current year has passed, move it to the next year
  if (nextBirthday < now) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  // Calculate the difference in milliseconds and convert to days
  const InMilliseconds = nextBirthday - now;
  const InDays = Math.ceil(InMilliseconds / (1000 * 60 * 60 * 24));

  document.getElementById(
    "daysUntilBirthday"
  ).innerHTML = `Days until next birthday: <span class="highlight">${InDays}</span>`;
  console.log(`Days until next birthday: ${InDays}`);
}

// Log current date and time when the page loads
logCurrentDateTime();

// Set your birthday (Month is zero-indexed: 0 for January, 11 for December)
const myBirthday = new Date(2000, 10, 25); // Change this to your birthday (month: November 6)

// Calculate and log days until next birthday
dayRemainingNextBirthday(myBirthday);
