// From a unsorted array, check whether there are any two numbers
// that will sum up to a given number

function sumFinder (arr, sum) {
  let checker = false;

  arr.map(function (element, elementIndex) {
    arr.map(function (deepElement, deepElementIndex) {
      if ((element + deepElement === sum) && (arr[elementIndex] !== arr[deepElementIndex])) {  // or (arr.indexOf(element) !== arr.indexOf(element))
        checker = true;
      }
    });
  });
  return checker;
}

// sumFinder([6,4,3,2,1,7], 9); // true
sumFinder([6, 4, 3, 2, 1, 7], 2); // false
