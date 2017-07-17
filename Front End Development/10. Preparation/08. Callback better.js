function doItWhenReady () {
  console.log('Hello from callback!');
}

function process (callback) {
  if (typeof callback !== 'function') return;
  callback();
}

process(doItWhenReady);
