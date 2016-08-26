/*Instructions: Make a function that looks through an array of objects 
(first argument) and returns an array of all objects that have matching 
property and value pairs (second argument). Each property and value pair 
of the source object has to be present in the object from the collection 
if it is to be included in the returned array.*/

'use strict';

function whatIsInAName(collection, source) {

  var srcKeys = Object.keys(source);
  console.log('srcKeys: ', srcKeys );
  
  var returnElement = collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        console.log('1obj.hasOwnProperty(srcKeys[i]): ', obj.hasOwnProperty(srcKeys[i]));
        console.log('1obj[srcKeys[i]]: ', obj[srcKeys[i]]);
        console.log('1source[srcKeys[i]]: ', source[srcKeys[i]]);
        return false;
      }
        console.log('2obj.hasOwnProperty(srcKeys[i]): ', obj.hasOwnProperty(srcKeys[i]));
        console.log('2obj[srcKeys[i]]: ', obj[srcKeys[i]]);
        console.log('2source[srcKeys[i]]: ', source[srcKeys[i]]);
    }
    return true;
  });


  return returnElement;
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