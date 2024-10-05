function CurrentDatenTime() {
    const currentDate = new Date();
    console.log("Current Date and Time is:", currentDate.toString());
}

CurrentDatenTime();

function UntilBirthday(birthday) {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

    if (nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const diffTime = nextBirthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

const myBirthday = new Date("2001-11-03");
const daysLeft = UntilBirthday(myBirthday);
console.log(`Days left until my next birthday are: ${daysLeft}`);