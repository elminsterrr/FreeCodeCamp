const Bike = function() {
  let gear;
  // Step 2: The setGear method should "set" the gear equal to whatever the input is..
  this.setGear = function(change) {
    gear = change;
  };
  // Step 3: The getGear method should "get" the gear, so you basically just ask it to return "gear".
  this.getGear = function() {
    return gear;
  };
};
const myBike = new Bike();

// Tests
// myBike.getGear() should return 4 after calling myBike.setGear(4).
// 1
myBike.setGear(4);
myBike.getGear();
// 2
// myBike.getGear() should return 3 after calling myBike.setGear(3).
myBike.setGear(3);
myBike.getGear();
// 3
// myBike.getGear() should return 1 after calling myBike.setGear(1).
myBike.setGear(1);
myBike.getGear();

// Rules
// The method getGear of myBike should be accessible outside the object.
// The method setGear of myBike should be accessible outside the object.
// myBike.gear should remain undefined.
// myBike.getGear() should return 4 after calling myBike.setGear(4).
// myBike.getGear() should return 3 after calling myBike.setGear(3).
// myBike.getGear() should return 1 after calling myBike.setGear(1).
