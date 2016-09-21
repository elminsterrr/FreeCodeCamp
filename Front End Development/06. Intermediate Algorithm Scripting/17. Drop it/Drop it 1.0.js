/*
Working example: https://repl.it/DeLD/0

Instructions: 
Drop the elements of an array (first argument), 
starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements
of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/

'use strict';
//start------------------------------------------
function dropElements(arr, func) {
  var emptyArray = [];  
  var i;
  var outcome;
  for(i = 0; i < arr.length; i++) {
    //If for i func is true, then slice arr in that point. 
    //Then save result to outcome and return outcome.
    if(func(arr[i])) {
      outcome = arr.slice(i);
      return outcome;
    }
  }
  //If func is never true for any i in array, then return empty array.
  return emptyArray;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); //should return [3, 4].
//dropElements([0, 1, 0, 1], function(n) {return n === 1;}) //should return [1, 0, 1].
//dropElements([1, 2, 3], function(n) {return n > 0;}) //should return [1, 2, 3].
//dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //should return [].
//dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) //should return [7, 4].
//dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) //should return [3, 9, 2].

//end---------------------------------------------