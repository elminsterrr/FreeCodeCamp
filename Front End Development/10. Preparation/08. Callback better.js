function doItWhenReady() {
  alert('Hello from callback!');
}

function process(callback) {
  if (typeof callback !== 'function') {
    callback = false;
  }

  if (callback) {
    callback();
  }
}

process(doItWhenReady);