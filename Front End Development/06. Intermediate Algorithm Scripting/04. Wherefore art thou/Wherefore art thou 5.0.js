/*Instructions: Make a function that looks through an array of objects 
(first argument) and returns an array of all objects that have matching 
property and value pairs (second argument). Each property and value pair 
of the source object has to be present in the object from the collection 
if it is to be included in the returned array.*/

'use strict';

function whatIsInAName(collection, source) {

  var sourceKeys = Object.keys(source);
  
  console.log('collection:', collection);
  console.log('                          ');
  console.log('source:', source);
  console.log('                          ');
  
  return collection.filter(function(obiekt) {
    return sourceKeys.every(function(key) {
    
      console.log('obiekt: ', obiekt);
      console.log('key: ', key);
      console.log('obiekt.hasOwnProperty(key): ', obiekt.hasOwnProperty(key));
      console.log('obiekt[key]: ', obiekt[key]);  
      console.log('source[key]: ', source[key]);
      console.log('                          ');
      
      return obiekt.hasOwnProperty(key) && obiekt[key] === source[key];
    });
  });

}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

//should return [{ "a": 1, "b": 2, "c": 2 }]. 





/*
    We filter through the array using .filter().
    Using a for loop we loop through each item in the object.
    We use a if statement to check if the object in the collection doesn't have 
    the key and the property value doesn't match the value in source.
    We return false if the above if statement is correct. Otherwise, we return true;
*/