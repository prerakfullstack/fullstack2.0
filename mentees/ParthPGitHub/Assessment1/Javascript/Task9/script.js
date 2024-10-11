// 1. Function to log the current date and time
const logCurrentDateTime = () => {
    const currentDate = new Date();
    console.log(`Current Date and Time: ${currentDate}`);
};

// Call the function to log current date and time
logCurrentDateTime();

// 2. Function to calculate days left until the next birthday
const daysUntilBirthday = (birthday) => {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

    // If the birthday has already occurred this year, set it for next year
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    // Calculate the difference in milliseconds and convert to days
    const differenceInTime = nextBirthday - today;
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24)); // Convert ms to days

    return differenceInDays;
};

// Example usage: Calculate days until next birthday
const myBirthday = new Date('2024-01-01'); // Set your birthday date here
const remainingDays = daysUntilBirthday(myBirthday);
console.log(`Days until my next birthday: ${remainingDays}`);