function duplicate(arr) {
  let target = [];
  let checker;
  arr.map(function (element, index, proccessedArray) {
    if (checker === element) return target.push(element);
    checker = element;
    console.log(element, index, proccessedArray);
  });
  return target;
}

duplicate([1, 2, 3, 4, 5, 6, 7, 7, 9, 10]); // [ 7 ]
