const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    startEngine: function () {
        console.log("Engine started!");
    }
};
document.getElementById("startButton").addEventListener("click", function () {
    return car.startEngine();
});
document.getElementById("carDetails").textContent = `Car: ${car.make} ${car.model}, Year: ${car.year}`;
