const car = {
    make: 'rolls royce',
    model: 'Phantom',
    year: 2023,
    startEngine: function () {
        console.log("Engine started!");
    }
};

car.startEngine();

document.getElementById('carStarted').addEventListener('click', function () {
    car.startEngine()
})