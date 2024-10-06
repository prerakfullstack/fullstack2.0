// Car class with constructor and method
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to log "Engine started!" to the console
  startEngine() {
    console.log("Engine started!");
  }
}

// Create a new instance of the Car class
const myCar = new Car("Honda", "Civic", 2022);

// Function to handle button click and trigger the car's startEngine method
function onButtonClick() {
  myCar.startEngine();
}
