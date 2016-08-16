'use strict';

function diffArray(arr1, arr2) {
  function testingCodeArr2(x) {
    console.log('arr2.indexOf(x):', arr2.indexOf(x) == -1);
    if (arr2.indexOf(x) == -1) {
      console.log('FOUND!:', x, '#', arr2.indexOf(x));
    }
    return arr2.indexOf(x) == -1;
  }
  function testingCodeArr1(x) {
    console.log('arr1.indexOf(x):', arr1.indexOf(x) == -1);
    if (arr1.indexOf(x) == -1) {
      console.log('FOUND!:', x,'#', arr1.indexOf(x));
    }
    return arr1.indexOf(x) == -1;
  }
//Function to test each element of the array. Return true to keep the element, false otherwise.
  var differenceFromArr1 = arr1.filter(testingCodeArr2);
  var differenceFromArr2 = arr2.filter(testingCodeArr1);
//The concat() method returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments.
  var finalDifference = differenceFromArr1.concat(differenceFromArr2); 
  return finalDifference; 
}

diffArray([-15, 1, 2, 3, 5], [1, 2, 3, 99, 5]);