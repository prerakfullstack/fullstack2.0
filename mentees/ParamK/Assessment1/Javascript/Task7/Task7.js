const car = {
    make: "BMW",
    model: "X3",
    year: "2014",
    startEngine: function () {
        console.log("Engine Started");
    }
}

document.querySelector(".btn").addEventListener("click", () => {
    car.startEngine();
});