let counter = 0;

const setInterval_ID = setInterval(function() {
  counter++;
  console.log('tic');
  if (counter === 5) {
    clearInterval(setInterval_ID);
  }
}, 1000);
