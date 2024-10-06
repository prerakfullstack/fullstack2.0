const currentDate = new Date();
const birthDate = new Date(2002, 1, 25)
// months will be starting from 0 that why we used 1 in here as feb

console.log(currentDate, "Current Date and Time");
console.log(birthDate, "Date Of Birth");

function daysLeftDob(birthDate) {
    if (currentDate > birthDate) {
        birthDate.setFullYear(currentDate.getFullYear() + 1)
    };
    
    const diffInTime = birthDate - currentDate;
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24))
    return diffInDays;
}

console.log(daysLeftDob(birthDate), "days left in coming Birth Date");



