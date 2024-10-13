{
  console.log("***********Task 7***********");

  const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    startEngine: function () {
      console.log("Engine started!");
    },
  };

  console.log(car);

  document.getElementById("startButton").addEventListener("click", function () {
    car.startEngine();
  });

  console.log("************Task 7 ended************");
}
