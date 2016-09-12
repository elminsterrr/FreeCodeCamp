/*
Working example: https://repl.it/DPrd

Instructions: Write a function that takes two or more arrays and returns 
a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included 
in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, 
but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

'use strict';

function uniteUnique(arr) {
  var i;
  var arrReady;
  var flattened;
  var clearDup;
  
  i = 0;
  arrReady = [];
  while (arguments[i] !== undefined) { 
    arrReady.push(arguments[i]);
    i++;
  }
  console.log(arrReady);
  flattened = arrReady.reduce(function(a, b) {
    return a.concat(b);
  });
  clearDup = flattened.filter(function(item, pos) {
    console.log(item,'', flattened.indexOf(item), pos);
    return flattened.indexOf(item) == pos;
  });
  return clearDup;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);