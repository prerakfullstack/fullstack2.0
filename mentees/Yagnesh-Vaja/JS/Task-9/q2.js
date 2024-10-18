function daysUntilNextBirthday(birthday) {
    const now = new Date();
    const currentYear = now.getFullYear();

    
    let nextBirthday = new Date(currentYear, birthday.getMonth(), birthday.getDate());

    
    if (nextBirthday < now) {
        nextBirthday.setFullYear(currentYear + 1);
    }

  
    const differenceInTime = nextBirthday - now;

  
    const daysLeft = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    return daysLeft;
}


const myBirthday = new Date('2003-01-26'); 
console.log("Days until next birthday:", daysUntilNextBirthday(myBirthday));
