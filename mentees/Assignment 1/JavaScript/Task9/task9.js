var d = new Date();
document.getElementById("display").innerHTML = d.toString()

let dateInput = prompt("Enter a date (YYYY-MM-DD):")

let date = new Date(dateInput)

let opstring = ''

if (isNaN(date)) {
  opstring = 'Enter in Valid Formate'
  alert(opstring)
} else {
  let diffrence = date.getDate() - d.getDate();
  opstring = `${diffrence} days is left for your birthday`
}
document.getElementById("dayleft").innerHTML = opstring