const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    startEngine: function () {
        console.log("Engine started!");
       
    }
}
document.getElementById("startEngineBtn").addEventListener("click", function () {
    car.startEngine();
});
