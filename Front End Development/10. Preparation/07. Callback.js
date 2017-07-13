function potega(argument, cb) {
  if (cb) {
    cb(argument * argument);    
  } 
}

potega(2, function(wynik) {
  console.log(wynik); 
});