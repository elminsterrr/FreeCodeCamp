/*Instructions: Make a function that looks through an array of objects 
(first argument) and returns an array of all objects that have matching 
property and value pairs (second argument). Each property and value pair 
of the source object has to be present in the object from the collection 
if it is to be included in the returned array.*/

'use strict';


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  console.log('collection:', collection);
  console.log('                                                 ');
  console.log('source:', source);
  console.log('                                                 ');
  console.log('Object.keys(collection):', Object.keys(collection));
  console.log('Object.keys(source):', Object.keys(source));
  // console: ['0', '1', '2']
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });