{
  function Vehicle(type, wheels) {
    this.type = type;
    this.wheels = wheels;
  }

  Vehicle.prototype.describe = function () {
    return `This is a ${this.type} with ${this.wheels} wheels.`;
  };
  function Car(make, model) {
    Vehicle.call(this, "car", 4);
    this.make = make;
    this.model = model;
  }

  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;

  Car.prototype.getDetails = function () {
    return `Car: ${this.make} ${this.model}`;
  };

  const myCar = new Car("Tesla", "Model S");

  console.log(myCar.describe());
  console.log(myCar.getDetails());
}
