function Human () {
  this.name = 'Przemek';
}

Human.prototype.age = 30;

let przemo = new Human();

let x = przemo.hasOwnProperty('name'); // true
let y = przemo.hasOwnProperty('age'); // false

console.log('x: ', x);
console.log('y: ', y);

console.log(przemo.age); // 30
console.log(przemo);     // { name: 'Przemek' }

for (let prop in przemo) {
  console.log('prop: ', prop); // prop:  name, prop:  age
}

for (let prop in przemo) {
  if (przemo.hasOwnProperty(prop)) {
    console.log('@', prop); // @ name !!!
  }
}
