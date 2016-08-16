function minMaxOrder(arr) {
  function compare(a, b) {
    return a - b;
  }
  return arr.sort(compare);
}
minMaxOrder([4, 1]);