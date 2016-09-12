/*
Working example: https://repl.it/DAEW/5

Instructions: The DNA strand is missing the pairing element.
Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays 
are grouped into one encapsulating array.
*/

'use strict';

function pairElement(str) {
  var decodingTable= { A: 'T', T: 'A', C: 'G', G: 'C' };  //object literal of all DNA pairing elements
  
  var strSplitted = str.split('');
  var decoded = strSplitted.map(decoder);
  
  function decoder(item) {
    var dataReady = [item, decodingTable[item]];
    return dataReady;
  }
  
  return decoded;
}
pairElement("GCG");