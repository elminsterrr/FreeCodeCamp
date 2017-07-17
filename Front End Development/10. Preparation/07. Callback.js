function power (argument, cb) {
  if (cb) {
    cb(argument * argument);
  }
}

power(2, function (result) {
  console.log(result);
});
