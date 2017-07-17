function Person (first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person('John', 'Doe', 50, 'blue');
const myMother = new Person('Sally', 'Wu', 48, 'green');

console.log(myFather); // { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }
console.log(myMother); // { firstName: 'Sally', lastName: 'Wu', age: 48, eyeColor: 'green' }
