/*Instructions: Make a function that looks through an array of objects 
(first argument) and returns an array of all objects that have matching 
property and value pairs (second argument). Each property and value pair 
of the source object has to be present in the object from the collection 
if it is to be included in the returned array.*/

'use strict';

function whatIsInAName(collection, source) {
  
 //console.log(source); -->  { first: 'Mercutio', last: 'Capulet' }
  
  var newArr = collection.filter(function(obiekt) {  
  /*
  Metoda filter wykonuje dostarczoną funkcję callback 
  dla każdego elementu tablicy tworząc nową tablicę 
  z wszystkich tych elementów, dla których funkcja callback
  zwróciła wartość true. 
  */
    for (var i in source) {                               //Essentially, it is (for i in array) this iterates through the entire array so no length is needed. It is just a short cut for a for loop for an array.
    
    console.log('Obiekt: ', obiekt);
    console.log('Source: ', source);
    console.log('Checking for: ', i);
    console.log('obiekt[i]: ', obiekt[i]);
    console.log('source[i]: ', source[i]);
    console.log('                       '); 
      
      if (obiekt[i] === source[i]) {
        return true;  
      }
    }
    return false;
  });
  return newArr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first: "Mercutio", last: "Capulet" });

//should return [{ first: "Tybalt", last: "Capulet" }].


/*
    We filter through the array using .filter().
    Using a for loop we loop through each item in the object.
    We use a if statement to check if the object in the collection doesn't have 
    the key and the property value doesn't match the value in source.
    We return false if the above if statement is correct. Otherwise, we return true;
*/