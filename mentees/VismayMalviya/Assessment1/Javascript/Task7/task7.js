const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    startEngine: function() {
        console.log("Engine Started Normally!");
    }
};

function handleButtonClick() {
    car.startEngine();
}

document.getElementById("startButton").addEventListener("click", handleButtonClick);