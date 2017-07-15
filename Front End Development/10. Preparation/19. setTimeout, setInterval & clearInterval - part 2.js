let counter = 91;

const id = setInterval(function() {
  console.log(counter);
  counter++;
  if (counter === 100) {
    clearInterval(id);
    console.log('100 reached and STOPPED!');
  }
  if (counter !== 100) {
    console.log('Still counting...');
  }
}, 3000);
