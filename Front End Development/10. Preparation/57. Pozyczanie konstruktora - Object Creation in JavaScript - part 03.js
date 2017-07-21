function Parent (firstName) {
  this.firstName = firstName;
}

Parent.prototype.getFirstName = function () {
  return this.firstName;
};

function Child (firstName, lastName) {
  Parent.call(this, firstName);
  this.lastName = lastName;
}

Child.prototype = Object.create(Parent.prototype);

let child = new Child('Jon', 'Smith');

console.log(child.firstName); // Jon
console.log(child.lastName); // Smith
console.log(typeof child.getFirstName); // 'function'
