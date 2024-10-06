const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    startEngine: function () {
        console.log("Engine started!");
    }
};

car.startEngine();

document.getElementById('carStarted').addEventListener('click', function () {
    car.startEngine()
})