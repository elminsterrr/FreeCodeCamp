function diffArray(arr1, arr2) {
  
  let difference = arr1
                 .filter(x => arr2.indexOf(x) == -1)
                 .concat(arr2.filter(x => arr1.indexOf(x) == -1));
  
  return difference;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


------------------------------------------------------------------------
'use strict';                    //var new_array = arr.filter(callback[, thisArg]);

function diffArray(arr1, arr2) {

  function testingCodeArr2(x) {
    return arr2.indexOf(x) == -1;
  }

  function testingCodeArr1(x) {
    return arr1.indexOf(x) == -1;
  }
  
  var differenceArr1 = arr1.filter(testingCodeArr2);               
  var differenceArr2 = arr2.filter(testingCodeArr1);

  var finalDifference = differenceArr1.concat(differenceArr2);
  return finalDifference; 
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);