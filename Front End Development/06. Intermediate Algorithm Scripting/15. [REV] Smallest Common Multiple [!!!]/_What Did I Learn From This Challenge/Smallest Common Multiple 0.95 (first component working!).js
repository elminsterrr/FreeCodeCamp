/*
Working example: https://...

Instructions: 
Find the smallest common multiple of the provided parameters
that can be evenly divided by both, as well as by all sequential
numbers in the range between these parameters.

The range will be an array of two numbers that will not
necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple
of both 1 and 3 that is evenly divisible by all numbers between 1 and 3
*/
'use strict';

//start------------------------------------------
function smallestCommons(startArray) {
  return findAllNumbers(startArray);
}

function rightOrder(inputArray) {
  return inputArray.sort(compare);
}

function compare(input1, input2) {
  return input1 - input2;
}

function findAllNumbers(sortedInput) {
  var x = rightOrder(sortedInput);
  /*
  console.log(x);
  var test = x[1] - x[0];
  console.log(test);
  */

  //Creates newArray with contains all numbers 
  //from maximumValue to minimumValue.

  var newArray = [];
  var maximumValue = x[1];
  var minimumValue = x[0];
  while (minimumValue <= maximumValue) {
    newArray.push(maximumValue);
    maximumValue = maximumValue - 1;
  }
  return newArray;
}

smallestCommons([5, 1]); //should return 60.
//smallestCommons([1, 5]) //should return 60.
//smallestCommons([5, 1]) //should return 60.
//smallestCommons([1, 13]) //should return 360360.
//smallestCommons([23, 18]) //should return 6056820.
//end---------------------------------------------

1, 2, 3, 4, 5



1  ->> 1,2,3,4,5,6,7,8,9,10 ... 60
2  ->> 2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60
3  ->> 3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60
4  ->> 4,8,12,16,20,24,28,32,36,40,44,48,52,56,60
5  ->> 5,10,15,20,25,30,35,40,45,50,55,60


//smallestCommons([1, 5]) //should return 60.
//smallestCommons([5, 1]) //should return 60.
//smallestCommons([1, 13]) //should return 360360.
//smallestCommons([23, 18]) //should return 6056820.