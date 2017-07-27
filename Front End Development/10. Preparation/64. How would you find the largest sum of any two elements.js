// How would you find the largest sum of any two elements?

function topSum (arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let last = arr.pop();
  let oneBeforeLast = arr.pop();
  return last + oneBeforeLast;
}

topSum([888, 90, 5, 7, 112, 1, 2, 11]); // 1000
