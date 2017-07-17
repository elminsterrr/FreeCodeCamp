let counter = 0;

const setIntervalID = setInterval(function () {
  counter++;
  console.log('tic');
  if (counter === 5) {
    clearInterval(setIntervalID);
  }
}, 1000);
