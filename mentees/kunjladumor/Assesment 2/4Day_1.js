{
  class Vehicle {
    constructor(type, wheels) {
      this.type = type;
      this.wheels = wheels;
    }

    describe() {
      return `This is a ${this.type} with ${this.wheels} wheels.`;
    }
  }

  class Car extends Vehicle {
    constructor(make, model) {
      super("car", 4);
      this.make = make;
      this.model = model;
    }

    describe() {
      return `Car: ${this.make} ${this.model}, a type of car with ${this.wheels} wheels.`;
    }
  }

  class ElectricCar extends Car {
    constructor(make, model, batteryCapacity) {
      super(make, model);
      this.batteryCapacity = batteryCapacity;
    }

    describe() {
      return `${super.describe()} It has a battery capacity of ${
        this.batteryCapacity
      } kWh.`;
    }
  }

  const myCar = new ElectricCar("Tesla", "Model 3", 75);

  console.log(myCar.describe());
}
