'use strict';

function convertToRoman(givenNumber) {

  function convertToStringAndSplit(num) {
    var newString = num.toString();
    var stringSplited = newString.split(''); 
    return stringSplited;
  }
  
  function decodingFirst(myString) {
    var answer = '';
    var firstNumberString = myString[1];
    var firstNumberNumber = parseInt(firstNumberString);
    
    //console.log(typeof firstNumberNumber);
   
    switch (firstNumberNumber) {
        case 1:
          answer = 'I';
          break;
        case 2:
          answer = 'II';
          break;
        case 3:
          answer = 'III';
          break;
        case 4:
          answer = 'IV';
          break;
        case 5:
          answer = 'V';
          break;
        case 6:
          answer = 'VI';
          break;
        case 7:
          answer = 'VII';
          break;
        case 8:
          answer = 'VIII';
          break;
        case 9:
          answer = 'IX';
          break;

        default:
          answer = 'Error! Number not recognized!';
    }

    return answer;
  }

  function decodingSecond(myString) {
    var answer = '';
    var secondNumberString = myString[0];
    var secondNumberNumber = parseInt(secondNumberString);
    
    //console.log(typeof firstNumberNumber);
   
    switch (secondNumberNumber) {
        case 1:
          answer = 'X';
          break;
        case 2:
          answer = 'XX';
          break;
        case 3:
          answer = 'XXX';
          break;
        case 4:
          answer = 'XL';
          break;
        case 5:
          answer = 'L';
          break;
        case 6:
          answer = 'LX';
          break;
        case 7:
          answer = 'LXX';
          break;
        case 8:
          answer = 'LXXX';
          break;
        case 9:
          answer = 'XC';
          break;

        default:
          answer = 'Error! Number not recognized!';
    }

    return answer;
  }

  var myString = convertToStringAndSplit(givenNumber);
  console.log(myString);

  var tempFirst = decodingFirst(myString);
  console.log(tempFirst);

  var tempSecond = decodingSecond(myString);
  console.log(tempSecond);

  return tempSecond + tempFirst; //TYMCZASOWO!
}
convertToRoman(36);