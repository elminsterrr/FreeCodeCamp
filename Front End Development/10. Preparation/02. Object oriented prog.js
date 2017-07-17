// var x = new Object(); // Do not use
// console.log(x);

const objPrzemek = {
  name: 'Przemek',
  height: 179,
  legs: 2,
  howManyLegs: () => this.legs
};
console.log(objPrzemek);
console.log(objPrzemek.height);
objPrzemek.height = 190;
console.log(objPrzemek.height);
console.log(objPrzemek.howManyLegs());
