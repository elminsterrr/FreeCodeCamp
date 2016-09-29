/*
Working example: https://...

Instructions: 
Flatten a nested array. 
You must account for varying levels of nesting.
*/

'use strict';
//start-------------------------------------------
function steamrollArray(arr) {
  var i;
  for(i = 0; i <arr.length; i++) {
    if(Array.isArray(i)) {
      
    }
  }
  return 1;
}

steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4].
//steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
//steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].
//end---------------------------------------------