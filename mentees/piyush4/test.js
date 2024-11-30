///////////////////////
console.log('Task 1 _______________________________________________________')
var name = "Piyush"; // Storing a string using `var`
const birthyr = 1994; // Storing a number using `const`
let isbool = true; // Storing a boolean using `let`
const array = ["test1", "test2", "test3"]; // when const is declared it can't be change
console.log(name,birthyr,isbool,array)
console.log('Task 2 _______________________________________________________')
function addnum(num1, num2) {
    // Arithmetic Operators
    const additionResult = num1 + num2;
    const subResult = num1 - num2;

    // Compare
    const isEqual = num1 === num2;

    // Logical Operator
    const ispositive = (subResult > 0) && (additionResult > 0);

    
    console.log("Adition:", additionResult);
    console.log("Subtractiom:", subResult);
    console.log("is equal? ", isEqual);
    console.log("is result positive?", ispositive);
    console.log('_____________________________________')
}

addnum(51, 13);
addnum(41, 34);
addnum(-11, 7);

console.log('Task 3 _______________________________________________________')
const countries = ["India", "Nepal", "Usa", "China", "Japan"];

console.log("countries List");
for (let i = 0; i < countries.length; i++) {
  console.log(i,countries[i]);
}


function multiNumber(num) {
  console.log(`\nMulti Number ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}


multiNumber(5);

console.log('Task 4 _______________________________________________________')
function chkEvnOd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}


chkEvnOd(4); //  Even
chkEvnOd(7); //  Odd


function categorizeDay(phone) {
  switch (phone) {
    case 1:
      console.log("Iphone");
      break;
    case 2:
      console.log("Samsung");
      break;
    case 3:
      console.log("OnePlus");
      break;
    
     
    default:
      console.log("by default case like Exception");
  }
}


categorizeDay(1); 
categorizeDay(2); 
categorizeDay(0); 




console.log('Task 5 _______________________________________________________')
const numbers = [11, 25, 31];
const person = { fname: "piyush", lname: "variya", age: 29 };

function logPersonDetails(person) {
  const { fname, lname, age } = person; 
  console.log(`Name: ${fname} ${lname}, Age: ${age}`);
}


logPersonDetails(person); 


function sumThreeNumbers(numbers) {
  const [num1, num2, num3] = numbers; 
  return num1 + num2 + num3;
}


const sum = sumThreeNumbers(numbers); 
console.log(`Sum: ${sum}`);


console.log('Task 6 _______________________________________________________')

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8];


const merged = [...array1, ...array2];

console.log('after Merge', merged);

const obj = {
  key: "value",
  key2: 1,
  key3:{'Name':"value1"},
  arr: ["test", "test2", "test3"],
};
const updateObj = { ...obj, key2: 22 };

console.log("obj:", obj);
console.log("new obj", updateObj);

console.log('Task 7 _______________________________________________________')


const stocks = {
    bank: 'HDFC Bank',
    it: 'TCS',
    auto: "TATA Motors",
    pharma:"CIPLA",
    allStocks: function() {
        console.log('here all stocks');
    }}
console.log(stocks)

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Stocks Details</title>
//     <script>
       
//        const stocks = {
//     bank: 'HDFC Bank',
//     it: 'TCS',
//     auto: "TATA Motors",
//     pharma:"CIPLA",
//     allStocks: function() {
//         console.log('here all stocks');
//     }};

//         //  button click
//         function handleButtonClick() {
//             stocks.allStocks(); // Call the method
//         }

//         // Wait for the DOM to load before adding event listener
//         document.addEventListener('DOMContentLoaded', function() {
//             const button = document.getElementById('startButton');
//             button.addEventListener('click', handleButtonClick);
//         });
//     </script>
// localStorage.setItem("userName", "piyush");

// const userName = localStorage.getItem("userName");
// console.log("User's Name from LocalStorage:", userName);

// document.getElementById("userNameDisplay").textContent = userName; 
// </head>
// <body>
//     <h1>stocks Details</h1>
//     <button id="startButton">details button</button>
// </body>
// </html>

console.log('Task 8 _______________________________________________________')

const numbers2 = [22, 33, 11, 99, 77, 44, 55];

const sortedDesc = numbers2.slice().sort((a, b) => b - a);
console.log("Sorted Numbers Descending number", sortedDesc);

const addAllNumbers = numbers2.reduce((sum, num) => sum + num, 0);
console.log("Addition of All Numbers:", addAllNumbers);

const filteredNumbers = numbers2.filter((num) => num > 50);
console.log("Filtered Numbers (Greater than 50):", filteredNumbers);
const decimalNumber = 21.54;

const rounded = Math.round(decimalNumber);
console.log("Rounded:", rounded);
const ceiled = Math.ceil(decimalNumber);
console.log("Ceiled:", ceiled);

const floored = Math.floor(decimalNumber);
console.log("Floor :", floored);


console.log('Task 9 _______________________________________________________')
function currentDateTime() {
  const currentDate = new Date(); 
  console.log("Current Date and Time:", currentDate);
}

currentDateTime();


function daysUntilNextBirthday(birthdayMonth, birthdayDay) {
  const currentYear = new Date().getFullYear(); 
  const currentDate = new Date();
  
 
  let nextBirthday = new Date(currentYear, birthdayMonth - 1, birthdayDay);
  
 
  if (currentDate > nextBirthday) {
    nextBirthday = new Date(currentYear + 1, birthdayMonth - 1, birthdayDay);
  }

  const timeDifference = nextBirthday - currentDate;
  
 
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
  return daysLeft;
}

const myBirthdayMonth = 11; 
const myBirthdayDay = 18;

console.log(`Days until my next birthday: ${daysUntilNextBirthday(myBirthdayMonth, myBirthdayDay)}`);

console.log('Task 10 _______________________________________________________')

function addNumbers (a, b) { return a + b};

console.log(addNumbers(5, 10)); 

const userProfileJSON1 = '{"name": "piyush", "age": 29, "workingWith": ["flutter", "js", "react"]}';

const userProfile1 = JSON.parse(userProfileJSON1);

console.log("User's Name:", userProfile1.name);

console.log('Task 11 _______________________________________________________')


const mapWithStocks = new Map([
    ["Bank", "HDFC"],
    ["It", "TCS"],
    ["Pharma", "CIPLA"],
  ]);
 
  function getCapitalByCountry(stocks) {
    return mapWithStocks.get(stocks);
  }
  

  console.log("Best stocks is", getCapitalByCountry("It"));
  
  const uniqueValuesSet = new Set([1, 2, 3, 4, 5]);
  
  function checkValueInSet(value) {
    return uniqueValuesSet.has(value);
  }
  
  console.log("Does the set contain 4?", checkValueInSet(4)); 
  console.log("Does the set contain 7?", checkValueInSet(7)); 


  console.log('Task 12 _______________________________________________________')

  
async function fetchUserData() {
    try {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    } catch (error) {
       
        console.error("Error fetching data:", error);
    }
}

fetchUserData();