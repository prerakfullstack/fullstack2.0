//Current Date
function logCurrentDateTime() {
    const currentDate = new Date();
    return currentDate.toString();
}

console.log(logCurrentDateTime());

//birthday calculation

function daysUntilNextBirthday(birthday) {
    const today = new Date();
    let nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffInTime = nextBirthday - today;

    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

    return diffInDays;
}

const myBirthday = new Date(1998, 3, 16);
console.log("Days until next birthday:", daysUntilNextBirthday(myBirthday));
