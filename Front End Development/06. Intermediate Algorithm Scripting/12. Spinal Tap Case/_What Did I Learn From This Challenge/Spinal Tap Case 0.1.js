/*
Working example: http://repl.it/DYm0

Instructions: Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.
*/

'use strict';

function spinalCase(str) {
  var pattern = /\s/g; //The RegExp constructor creates a regular expression object for matching text with a pattern.
  var toLowerCase = str.toLowerCase();
  var newstr = toLowerCase.replace(pattern, '-');
  return newstr;
}

spinalCase('This Is Spinal Tap');