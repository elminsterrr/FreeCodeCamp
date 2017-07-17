function work () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Delayed call!');
      resolve();
    }, Math.random() * 2000 + 1000);
    setTimeout(() => {
      console.log('Error!');
      reject();
    }, Math.random() * 2000 + 1000);
  });
}

work().then(function () {
  console.log('Delayed call finished!');
}).catch(function () {
  console.log('Error occurred!');
});
