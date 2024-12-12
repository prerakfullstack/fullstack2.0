{
  class Car {
    constructor(make, model, wheels) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
  }

  Car.prototype.describe = function () {
    return `This is a ${this.make} ${this.model}, a type of car with ${this.wheels} wheels.`;
  };

  const myCar = new Car("Toyota", "Corolla", 4);
  console.log(myCar.describe());

  Car.prototype.describe = function () {
    return `This is a ${this.make} ${this.model}, a type of car with ${this.wheels} wheels.`;
  };

  console.log(myCar.describe());
}
