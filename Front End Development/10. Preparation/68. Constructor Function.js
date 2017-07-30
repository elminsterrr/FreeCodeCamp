function Bike (wheels, seats, engine) {
  this.wheels = wheels;
  this.seats = seats;
  this.engine = engine;

  let gear = 0;

  this.setGear = function (change) {
    gear = change;
  };

  this.getGear = function () {
    return gear;
  };
}

let myBike = new Bike(4, 5, 1);
console.log(myBike);

myBike.setGear(6);
myBike.getGear(); // -> 6
