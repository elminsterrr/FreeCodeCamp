function a () {
  console.log(x); // undefined
  if (true) {
    console.log(); // Example
  }
  var x = 1;
  console.log(x); // 1
}

a();
