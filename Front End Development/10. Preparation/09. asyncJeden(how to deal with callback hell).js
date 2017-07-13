function asyncJeden() {
  return new Promise(function(resolve, reject) {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
}

function asyncDwa() {
  return new Promise(function(resolve, reject) {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
}

function asyncTrzy() {
  return new Promise(function(resolve, reject) {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
}

asyncJeden()
  .then(asyncDwa)
  .then(asyncTrzy)
  .then(function() {
    console.log('wszystko gotowe!');
  });
