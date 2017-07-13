var x = new Object();
console.log(x);


var y = {
  imie: 'Przemek',
  wzrost: 179,
  legs: 2,
  howManyLegs: function() {
    return this.legs;
  }
};
console.log(y);
console.log(y.wzrost);
y.wzrost = 190;
console.log(y.wzrost);
console.log(y.howManyLegs());