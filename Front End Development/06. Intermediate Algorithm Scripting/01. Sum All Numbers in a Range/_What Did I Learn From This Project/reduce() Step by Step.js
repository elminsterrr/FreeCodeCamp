//reduce() Step by Step
number = [1, 2, 3, 4, 5];
var result = number.reduce(function(prev, next, indexxx) {
  console.log(indexxx + ":" + prev + ":" + next);
  prev = prev + next;
  return prev;
}, 0);
console.log("Final Result: " + result);