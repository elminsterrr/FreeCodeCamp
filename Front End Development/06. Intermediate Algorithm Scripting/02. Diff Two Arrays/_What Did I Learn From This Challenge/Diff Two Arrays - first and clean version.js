'use strict';

function diffArray(arr1, arr2) {

  function testingCodeArr2(x) {
    return arr2.indexOf(x) == -1;
  }

  function testingCodeArr1(x) {
    return arr1.indexOf(x) == -1;
  }
  
  var differenceFromArr1 = arr1.filter(testingCodeArr2);               
  var differenceFromArr2 = arr2.filter(testingCodeArr1);

  var finalDifference = differenceFromArr1.concat(differenceFromArr2);
  return finalDifference; 
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);