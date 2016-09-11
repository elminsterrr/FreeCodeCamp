/*
Working example: http://...

Instructions: Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.
*/

'use strict';

function spinalCase(str) {
  var pattern1 = /\s/g;
  var pattern2 = /\_/g;
  
  var toLowerCase = str.toLowerCase();
  var newstr = toLowerCase.replace(pattern1, '-');
  var nexT = newstr.replace(pattern2, '-');
  
  return nexT;
}

spinalCase("The_Andy_Griffith_Show");
// should return "the-andy-griffith-show".