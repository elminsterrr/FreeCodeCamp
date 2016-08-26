/*Instructions: Make a function that looks through an array of objects 
(first argument) and returns an array of all objects that have matching 
property and value pairs (second argument). Each property and value pair 
of the source object has to be present in the object from the collection 
if it is to be included in the returned array.*/

'use strict';

function whatIsInAName(collection, source) {
  var sourceKeys = Object.keys(source);

  //['last']
    
  return collection.filter(function(obj) {
    return sourceKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//should return [{ first: "Tybalt", last: "Capulet" }]. 

/*
    We filter through the array using .filter().
    Using a for loop we loop through each item in the object.
    We use a if statement to check if the object in the collection doesn't have 
    the key and the property value doesn't match the value in source.
    We return false if the above if statement is correct. Otherwise, we return true;
*/