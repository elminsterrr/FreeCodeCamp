/*
Working example: https://repl.it/DRzN

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
  var args;
  var argsReduced;
  var finalArray = [];
  
  args = Array.prototype.slice.call(arguments);
  
  args.reduce(function(a, b) {
    return a.concat(b);
  }).forEach(function(item) {
    if(finalArray.indexOf(item) < 0) {
      console.log('Item indexOf(-1) is: ', item);
      finalArray.push(item);
    } else {
      console.log('Item indexOf(>0) is_: ', item);
    }
  });
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);