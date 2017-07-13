function dzialaj() {
  return new Promise(function(resolve, reject) {
    
    setTimeout(() => {
      
      console.log('wywołanie  z opóźnieniem');
      resolve(); // operacja  zakończona  sukcesem        
      
      }, Math.random() * 2000  + 1000);
      
      setTimeout(() => {
      
        console.log('symulacja  błędu');
        reject(); //  operacja  zakończona  błędem

        }, Math.random() * 2000  + 1000);    
  });
}

dzialaj().then(function() {
  console.log('już  po  wywołaniu z opóźnieniem');
}).catch(function() {
  console.log('nastąpił błąd!')
});