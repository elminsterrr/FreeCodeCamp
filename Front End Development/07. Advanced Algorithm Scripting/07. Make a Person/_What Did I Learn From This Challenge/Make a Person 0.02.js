/*
Working example: ...

Instructions:
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument
and it has to be a string. These methods must be the only available
means of interacting with the object.
*/

var Person = function(firstAndLast) {
  let nameArray = firstAndLast.split(' ');

  this.getFirstName = function() {
    return nameArray[0];
  };

  this.getLastName = function() {
    return nameArray[1];
  };

  this.getFullName = function() {
    return nameArray[0] + ' ' + nameArray[1];
  };

  this.setFirstName = function(first) {
    nameArray[0] = first;
  };

  this.setLastName = function(last) {
    nameArray[1] = last;
  };

  this.setFullName = function(firstAndLast) {
    nameArray[0] = firstAndLast.split(' ')[0];
    nameArray[1] = firstAndLast.split(' ')[1];
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();