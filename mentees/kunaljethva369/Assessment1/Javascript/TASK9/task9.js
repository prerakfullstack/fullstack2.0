const date = new Date();

console.log("Current Date ",date.getDate() + " " + date.getMonth() + " " + date.getFullYear());
console.log("Current Time ",date.getHours() + " " + date.getMinutes() + " " + date.getSeconds());

function daysUntilBirthday(birthday) {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(),birthday.getMonth(),birthday.getDate());


    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const differenceInTime = nextBirthday - today;


    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    return differenceInDays;
}

const myBirthday = new Date('2000-07-28');
const daysLeft = daysUntilBirthday(myBirthday);
console.log(`Days until next birthday: ${daysLeft}`);