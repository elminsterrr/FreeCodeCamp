(function() {
  
  var zero = 0;
  var trzydziesci = 0;

  function randomDamage(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }

  for (var i = 0; i < 10000; i++) {
    var hit = randomDamage(0, 30);
    console.log('Damage: ', hit);
    if (hit === 0) {
      zero += 1; 
    }
    if (hit === 30) {
      trzydziesci += 1; 
    }
  }

  console.log('ZERO SUM: ', zero);
  console.log('TRZYDZIESCI SUM: ', trzydziesci);
  
})();