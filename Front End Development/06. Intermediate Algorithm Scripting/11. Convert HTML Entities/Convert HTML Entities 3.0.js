/*
Working example: https://repl.it/DYj7

Instructions: Convert the characters:

&, <, >, " (double quote), and ' (apostrophe)

in a string to their corresponding HTML entities.
*/

'use strict';

function convertHTML(str) {

  var decoder = { 
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
  };

  return str.split('').map(function(character) {
    return decoder[character] || character;      
    //if this function can't find decoder[character] /'&' in this example
    //it simlpy returns input to new array {|| character;}
    //if it can find it, it simply returns value of it / '&amp;' in this example
    //Result [ 'D','o','l','c','e',' ','&amp;',' ','G','a','b','b','a','n','a' ]
  }).join(''); //Last thing to do it to join it.
}
convertHTML("Dolce & Gabbana");