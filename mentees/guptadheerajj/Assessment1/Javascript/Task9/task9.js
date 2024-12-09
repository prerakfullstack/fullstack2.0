// Q1.
function currentDate() {
	let date = new Date();
	console.log(
		`Current date is: ${date.toLocaleDateString()} and time is: ${date.toTimeString()}`
	);
}
currentDate();

// Q2.
let nextBirthDate = "2025-01-15";

function calcTimeLeft(nextBirthDate) {
	let birthDate = new Date(nextBirthDate);
	let birthMonth = birthDate.getMonth() + 1;
	console.log(birthMonth);
    
}

calcTimeLeft(nextBirthDate);
