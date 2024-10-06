const getBirthdayDifference = (month, date) => {
    let today = new Date();
    let currentYear = today.getFullYear();
    let nextBirthday = new Date(currentYear, (month - 1), date);
    if (today >= nextBirthday) {
        nextBirthday = new Date(currentYear + 1, (month - 1), date);
    }
    let diffBetDates = Math.ceil((nextBirthday - today) / (24 * 60 * 60 * 1000));
    return diffBetDates;
}
console.log(getBirthdayDifference(10, 2));
