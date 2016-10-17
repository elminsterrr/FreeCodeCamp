/*
Working example: https://repl.it/DyUO/0

Instructions: 
Create a function that takes two or more arrays and returns an array
 of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}),
the mathematical term "symmetric difference" of two sets is the set
of elements which are in either of the two sets, but not in both
(A △ B = C = {1, 4}). For every additional symmetric difference 
you take (say on a set D = {2, 3}), you should get the set
with elements which are in either of the two the sets
but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

sym(A, B, C) Translates to sym(sym(A,B),C)

Or in plain English - First find the Symmetric Difference of Set A and Set B.
Then find the Symmetric Difference of this new set and Set C.

So -

sym([1, 2, 5], [2, 3, 5], [3, 4, 5])

would equal

[1,4,5]
*/
function sym(args) {
  var argumenstsReady = Array.prototype.slice.call(arguments);
  var reducedToSymmetricDifference = argumenstsReady.reduce(function(a, b) {
    return destroyer(a, b);
  });
  function destroyer(arr, second) {
    var args = Array.prototype.slice.call(arguments);
    function firstCase(arr) {
      function tester1(element) {
        return args[1].indexOf(element) === -1;  
      }
      return arr.filter(tester1);
    }
    function secondCase(second) {
      function tester2(element) {
        return args[0].indexOf(element) === -1;  
      }
      return second.filter(tester2);
    }
    var mergedAndSorted = firstCase(arr)
      .concat(secondCase(second))
      .sort(function(a, b) {
        return a - b; 
      });
    return mergedAndSorted;
  }
  function finalCheck(input) {
    var filtered = [];
    input.map(function(elementToCheck) {
      if (filtered.indexOf(elementToCheck) === -1 ) {
        filtered.push(elementToCheck);
      }
    });
    return filtered;
  }
  var finalChecked = finalCheck(reducedToSymmetricDifference);
  return finalChecked;
}
sym([1, 2, 3], [5, 2, 1, 4]); //should return [3, 4, 5].
//sym([1, 2, 3], [5, 2, 1, 4]); //should contain only three elements.
//sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should return [1, 4, 5]
//sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should contain only three elements.
//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should return [1, 4, 5].
//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should contain only three elements.
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should return [2, 3, 4, 6, 7].
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should contain only five elements.
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should return [1, 2, 4, 5, 6, 7, 8, 9].
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should contain only eight elements.