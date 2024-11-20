//storing name on localstorage 
let name = prompt('Enter Your Name')
if (name != null) {
    localStorage.setItem("name" , name)
}

let op = 'Name of the User is ' + localStorage.getItem("name")

document.getElementById("name").innerHTML = op;

//map
let countryMap = new Map([
    ['INDIA', 'Delhi'],
    ['JAPAN', 'Tokyo'],
    ['RUSSIA', 'Moscow']
])

let enteredName = prompt('Enter Name of Country from (India, japan, Russia)')
let countryName = enteredName.toUpperCase();
console.log(countryName);

if (countryMap.has(countryName)) {
    console.log(`Capital of ${countryName} is ${countryMap.get(countryName)}`);
}else{
    console.log('Enter Valid Country Name');
}


//set
let arr = [1,2,3,4,4,5]
let arrSet = new Set(arr)

//Same Set just difftenr way to declare it
//let arrSet = new Set([1,2,3,4,5,5])

console.log(arrSet);

let check = Number(prompt("Input Number to check with set"))

if (arrSet.has(check)) {
    console.log(`Set have the element ${check}`);
}else{
    console.log(`Set do not have the element ${check}`);
}