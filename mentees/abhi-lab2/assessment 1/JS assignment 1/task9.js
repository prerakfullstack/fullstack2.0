function logCurrentDateTime() {
    console.log("logCurrentDateTime pritns current date and time", new Date().toLocaleString())
}

function daysUntilNextBirthday(birthdayMonth, birthdayDay) {
    const today = new Date();
    const currentYear = today.getFullYear()
    let nextBirthday = new Date(currentYear, birthdayMonth - 1, birthdayDay)
    if (today > nextBirthday) {
        nextBirthday.setFullYear(currentYear + 1)
    }
    const diffInTimes = nextBirthday - today
    const diffInDays = Math.ceil(diffInTimes / (1000 * 60 * 60 * 24))
    console.log('diffInDays: ', diffInDays)
    return diffInDays
}

logCurrentDateTime()
console.log(daysUntilNextBirthday(12, 25))
