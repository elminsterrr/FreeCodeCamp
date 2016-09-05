/*
Working example: http://repl.it/DNqL

Instructions: Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
'use strict';

function fearNotLetter(str) {
  var decodedArr = [];
  var splittedInputData = str.toUpperCase().split('');
  //UpperCase and splitted. Example: fearNotLetter("abce")->['A', 'B', 'C', 'E']
  for (var i in splittedInputData) {
    //For all elements in splittedInputData application is decoding UTF-16 values
    decodedArr.push(splittedInputData[i].charCodeAt());
  }
  var missingNumber = searchingForMissingNumber(decodedArr);
  //Function searchingForMissingNumber is looping through decodedArr
  function searchingForMissingNumber(input) {
    for(var k = 1; k < input.length; k++) {
      if(input[k] - input[k-1] != 1) {
        return input[k] - 1; 
      }
    }
  }
  var lastCheckResult = lastCheck(missingNumber);
  //Function lastCheckResult is checking if missingNumber === undefined. 
  function lastCheck(item) {
    if(item === undefined) {
      return undefined;
    } else {
        return String.fromCharCode(missingNumber).toLowerCase();
    }
  }
  return lastCheckResult;
}
fearNotLetter("abcdefghjklmno");
//should return "i".