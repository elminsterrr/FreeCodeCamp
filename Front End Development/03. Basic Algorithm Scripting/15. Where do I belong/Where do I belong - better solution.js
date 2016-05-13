/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(startingArray, num) {
  startingArray.push(num);              //Pushing "num" element to the end of the array.

  function sortMePlease(arr) {          //Sorting array.
    function compareFunction(a, b) {
      return a - b;
    }
    arr.sort(compareFunction);
    return arr;
  }
  
  var x = sortMePlease(startingArray);  //Sorts startingArray with "num" element and pass it to var x.
  console.log(x);                       //Showing x array to console, it should be sorted.
  
  

  for (var j = 0; j < x.length; j++) {  //Going through x array.
    if (x[j] >= num ) {
    	return x.indexOf(x[j]);           //Returning indexOf the element which is greater or even to "num" (15 in this example).
    } 
  } 
 
}
getIndexToIns([2, 5, 10, 20], 15); // should return 3.
/*LESS CODE:
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b)
           {return a-b;}
          );
  return arr.indexOf(num);
 }
 */