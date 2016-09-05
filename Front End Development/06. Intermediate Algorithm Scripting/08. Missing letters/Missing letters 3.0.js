/*
Working example: http://repl.it/DNsk/11

Instructions: Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

'use strict';

function fearNotLetter(str) {
  var i;
  var code;
  var len = str.length; 
  var start = str.charCodeAt(0);   // char code of first letter in str
  
  for (i = 0; i < len; i++) {
   
    code = str.charCodeAt(i);      // char code of current letter in str
    console.log('code:', code);

    /*
    checking every character to see if it's one more bigger than the last
    */
    
    if (code !== start + i) {
      console.log('if_code:', code);
      console.log('if_start_+_i:', start + i);
      // return letter that comes alphabetically before current letter
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}
//Testing:
fearNotLetter("abce"); //should return "d".
//fearNotLetter("abcdefghjklmno"); //should return "i".
//fearNotLetter("bcd"); //should return undefined.
//fearNotLetter("yz"); //should return undefined.