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
  
  //REAL CODE HERE - TOP
  var x = Object.keys(source);
  console.log(source[x]);
  for (var i = 0; i < collection.length; i++) {
    console.log(collection[i].hasOwnProperty(x));
    if (collection[i].hasOwnProperty(x) && source[x]===collection[i][x]) {
      console.log(collection[i]);
      console.log(collection[i][x]);
      arr.push(collection[i]);
    }
  }
  //REAL CODE HERE - BOTTOM
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) 
//should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].