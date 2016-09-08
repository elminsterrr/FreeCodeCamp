/*
Working example: http://...........

Instructions: Convert the characters:

&, <, >, " (double quote), and ' (apostrophe)

in a string to their corresponding HTML entities.
*/

'use strict';


function convertHTML(str) {
  
  
  var re = /<+/g;
  
  var newstr = str.replace(re, '&lt;');
  console.log(newstr);


  return newstr;
}

convertHTML("Hamburgers < Pizza < Tacos");