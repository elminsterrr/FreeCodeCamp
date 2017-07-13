function a() {
  
  console.log(x); // undefined
  
  if(true) {
    var y = 5;
  }
  
  var x = 1;
  
  console.log(x); // 1
  
}

a();