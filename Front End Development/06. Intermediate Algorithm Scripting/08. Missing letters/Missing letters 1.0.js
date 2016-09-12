/*
Working example: https://repl.it/DN6E

Instructions: Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

'use strict';

function fearNotLetter(str) {
  var decodedArr = [];
  var upper = str.toUpperCase();
  //All elements in String to UpperCase
  var splittedInputData = upper.split('');  
  //UpperCase and splitted. Example: fearNotLetter("abce")->['A', 'B', 'C', 'E']
  for (var i in splittedInputData) {
    //For all elements in splittedInputData application is decoding UTF-16 values
    // and it is pushing them to decodedArr
    var decodedValue = splittedInputData[i].charCodeAt();
    decodedArr.push(decodedValue);
  }
  console.log('decodedArr:', decodedArr);
  var missingNumber = searchingForMissingNumber(decodedArr);
  //Function searchingForMissingNumber is looping through decodedArr and 
  //it is looking for missing number
  console.log('missingNumber:', missingNumber);
  function searchingForMissingNumber(input) {
    for(var k = 1; k < input.length; k++) {
      if(input[k] - input[k-1] != 1) {
        var difference = input[k] - input[k-1];
        var iWasLookingForYou = input[k] - 1;
        return iWasLookingForYou;
      }
    }
  }
  var lastCheckResult = lastCheck(missingNumber);
  //Function lastCheckResult is checking if missingNumber === undefined. 
  //If not it is returning myGoalReady.
  function lastCheck(item) {
  	console.log('item:', item);
    if(item === undefined) {
      return undefined;
    } else {
        var myGoalUpper = String.fromCharCode(missingNumber);
        //Found missingNumber changes to UpperCase String
        var myGoalReady = myGoalUpper.toLowerCase();
        //UpperCase String modifies to LowerCase String
        return myGoalReady;
    }
  }
  return lastCheckResult;
}
fearNotLetter("abcdefghjklmno");
//should return "i".