const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    startEngine: function() {
        console.log("Engine started!");
    }
};


const startButton = document.getElementById('startButton');

startButton.addEventListener('click', function() {
    car.startEngine();
});
