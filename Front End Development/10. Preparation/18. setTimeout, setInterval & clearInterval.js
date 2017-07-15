let counter = 0;

const setInterval_ID = setInterval(function() {
  counter++;
  console.log('tic');
  if (counter === 10) {
    clearInterval(setInterval_ID);
  }
}, 1000);
