function logCurrentDateAndTime() {
    const today = new Date();
    const ddmmyy = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
    const hhmm = `${today.getHours()}:${today.getMinutes()}`;
    console.log(`currect Date:${ddmmyy} and Time:${hhmm}`);
};


logCurrentDateAndTime();

function findDaysLeftInBirthday(birthDateInDDMMYYYY) {
    const today = new Date();
    const [birthDay, birthMonth, birthYear] = birthDateInDDMMYYYY.split('/').map(Number);
    let nextBirthday = new Date(today.getFullYear(), birthMonth - 1, birthDay);

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    };
    const timeDiff = nextBirthday - today;

    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
}

console.log(`${findDaysLeftInBirthday("24/01/1997")} days left in next Birthday.`);
console.log(`${findDaysLeftInBirthday("15/10/1995")}  days left in next Birthday.`);