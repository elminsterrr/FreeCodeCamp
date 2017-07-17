function asyncOne () {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
}

function asyncTwo () {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
}

function asyncThree () {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
}

asyncOne()
  .then(asyncTwo)
  .then(asyncThree)
  .then(function () {
    console.log('Everything is ready!');
  });
