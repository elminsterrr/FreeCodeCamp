/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) {

  function compareFunction(a,b) {
    return a - b;
  }

  resultArr = [];
  for (var i=0; i<arr.length; i++) {
    arr[i].sort(compareFunction);
    resultArr.push(arr[i][3]);
  }
return resultArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);