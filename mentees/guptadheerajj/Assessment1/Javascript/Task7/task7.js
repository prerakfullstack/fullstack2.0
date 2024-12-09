// Q1.
const car = {
    madeBy: "Tata Motors",
    model: "Nano",
    year: 2023,
    startEngine: () =>  {
        console.log("Engine Starteed");
    }
};

// Q2. 
let btn = document.getElementById("btn");
btn.addEventListener("click", car.startEngine);