'use strict';

function convertToRoman(givenNumber) {
  
  function extendNumber(z) {
    if (z <= 9) {
      return '000' + z;
    } else if (z <= 99) {
      return '00' + z;
    } else if (z <= 999) {
      return '0' + z;
    } else {
      return z.toString();             //z.toString() because in line 19 I can split only STRING and returning just 'z' will cause an error: {newString.split is not a function}.
    }
  }

  function convertToStringAndSplit(num) {
    var newString = num;
    var stringSplited = newString.split(''); 
    return stringSplited;
  }                                    //   0    1    2    3 
                                       //[ '9', '9', '9', '9' ]
  function decodingFirst(myString) {
    var answer = '';
    var firstNumberString = myString[3];
    var firstNumberNumber = parseInt(firstNumberString);
       
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
        case 0:
          answer = '';
          break;

        default:
          answer = 'Error! Number not recognized!';
    }

    return answer;
  }

  function decodingSecond(myString) {
    var answer = '';
    var secondNumberString = myString[2];
    var secondNumberNumber = parseInt(secondNumberString);
       
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
        case 0:
          answer = '';
          break;

        default:
          answer = 'Error! Number not recognized!';
    }

    return answer;
  }

  function decodingThird(myString) {
    var answer = '';
    var thirdNumberString = myString[1];
    var thirdNumberNumber = parseInt(thirdNumberString);
       
    switch (thirdNumberNumber) {
        case 1:
          answer = 'C';
          break;
        case 2:
          answer = 'CC';
          break;
        case 3:
          answer = 'CCC';
          break;
        case 4:
          answer = 'CD';
          break;
        case 5:
          answer = 'D';
          break;
        case 6:
          answer = 'DC';
          break;
        case 7:
          answer = 'DCC';
          break;
        case 8:
          answer = 'DCCC';
          break;
        case 9:
          answer = 'CM';
          break;
        case 0:
          answer = '';
          break;

        default:
          answer = 'Error! Number not recognized!';
    }

    return answer;
  }

  function decodingFourth(myString) {
    var answer = '';
    var fourthNumberString = myString[0];
    var fourthNumberNumber = parseInt(fourthNumberString);
       
    switch (fourthNumberNumber) {
        case 1:
          answer = 'M';
          break;
        case 2:
          answer = 'MM';
          break;
        case 3:
          answer = 'MMM';
          break;
        case 4:
          answer = 'MMMM';
          break;
        case 5:
          answer = 'MMMMM';
          break;
        case 6:
          answer = 'MMMMMM';
          break;
        case 7:
          answer = 'MMMMMMM';
          break;
        case 8:
          answer = 'MMMMMMMM';
          break;
        case 9:
          answer = 'MMMMMMMMM';
          break;
        case 0:
          answer = '';
          break;

        default:
          answer = 'Error! Number not recognized!';
    }

    return answer;
  }

  var changedNumber = extendNumber(givenNumber);
  var myString = convertToStringAndSplit(changedNumber);
  var tempFirst = decodingFirst(myString);
  var tempSecond = decodingSecond(myString);
  var tempThird = decodingThird(myString);
  var tempFourth = decodingFourth(myString);

  return tempFourth + tempThird + tempSecond + tempFirst;
}
convertToRoman(36);