// Check Even or Odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is Even`)
    } else {
        console.log(`${number} is Odd`)
    }
}

console.log("Test checkEvenOdd function:")
checkEvenOdd(4)
checkEvenOdd(-325)
checkEvenOdd(0)
checkEvenOdd(7)

// Switch case
function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday";
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday";
        default:
            return "Invalid day"
    }
}

// Test the getDayOfWeek function
console.log("Testing getDayOfWeek function:")
for (let i = 1; i <= 8; i++) {
    console.log(`Day ${i}: ${getDayOfWeek(i)}`)
}

function getDayType(dayNumber) {
    const day = getDayOfWeek(dayNumber);

    if (day === "Invalid day") {
        return day // or we can throw error with throw new Error()
    } else if (day === "Saturday" || day === "Sunday") {
        return `${day} (Weekend)`
    } else {
        return `${day} (Weekday)`
    }
}

console.log("Testing getDayType function:")
for (let i = 1; i <= 8; i++) {
    console.log(`Day ${i}: ${getDayType(i)}`)
}