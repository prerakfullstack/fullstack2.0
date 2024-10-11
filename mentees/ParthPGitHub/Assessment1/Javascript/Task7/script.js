// Create an object representing a car
const car = {
    make: 'Mercedes-Benz',
    model: 'GLC',
    year: 2024,
    startEngine: function() {
        console.log("Engine started!");
    }
};

// Listen for the click event on the button
document.getElementById('startButton').addEventListener('click', () => {
    car.startEngine(); // Trigger the car's startEngine method
});