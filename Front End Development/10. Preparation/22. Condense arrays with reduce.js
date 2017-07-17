const array = [4,5,6,7,8];
let singleVal = 0;

singleVal = array.reduce(function(prev, acc) {
  return prev + acc;
});

console.log(singleVal); // 30
