const currying = function (a) {
  return function (b) {
    return a + b;
  };
};

const mySum = currying(1)(2);
console.log(mySum); // -> 3
