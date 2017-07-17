function hoisting (arg) {
  console.log(myVar); // undefined
  if (arg > 5) {
    console.log(arg); // Example
  }
  var myVar = 1;
  console.log(myVar); // 1
}

hoisting(10);
