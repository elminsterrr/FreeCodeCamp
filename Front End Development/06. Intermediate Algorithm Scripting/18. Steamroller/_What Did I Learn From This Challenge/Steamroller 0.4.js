/*
Working example: https://...

Instructions: 
Flatten a nested array. 
You must account for varying levels of nesting.
*/

'use strict';
//start-------------------------------------------
function steamrollArray(arr) {
  return isThisStillArray(arr);
}

function isThisStillArray(inputForTest) {
  var tested = Array.isArray(inputForTest);
  if(tested === false) {
    return tested;
  }
  return isThisStillArray(tested);
}

steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4].
//steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
//steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].
//end---------------------------------------------