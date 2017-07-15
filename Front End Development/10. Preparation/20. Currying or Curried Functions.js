const addC = function(a) {
  return function(b) {
    return a + b;
  };
};

const mySum = addC(1)(2);
console.log(mySum); // -> 3
