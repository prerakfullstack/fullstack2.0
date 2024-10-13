const car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  startEngine: function () {
    console.log("Engine started!");
  },
};
// document.getElementById("startButton").addEventListener("click", function () {
//   car.startEngine();
// });
function startEngine() {
  car.startEngine();
}
