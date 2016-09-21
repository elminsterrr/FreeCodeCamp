/*
Working example: https://...

Instructions: 
Drop the elements of an array (first argument), 
starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements
of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/
'use strict';

//start------------------------------------------ //var pierwiastki = liczby.map(Math.sqrt);


function dropElements(arr, func) {
  var finished = first(arr, func);
  return second(finished);
}

function first(array, testFunction) {
  return array.slice(0, 1);
}

function second(input) {
  if(input >= 3) {
    return input;
  }
  return undefined;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) //should return [3, 4].
//dropElements([0, 1, 0, 1], function(n) {return n === 1;}) //should return [1, 0, 1].
//dropElements([1, 2, 3], function(n) {return n > 0;}) //should return [1, 2, 3].
//dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //should return [].
//dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) //should return [7, 4].
//dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) //should return [3, 9, 2].

//end---------------------------------------------