/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns(startingArray, num) {

  function sortMePlease(arr) {          //Sorting array.
    function compareFunction(a, b) {
      return a - b;
    }
    arr.sort(compareFunction);
    return arr;
  }
  
  var x = sortMePlease(startingArray);  //Sorts starting array and pass it to var x.
  console.log(x);                       //Showing x array to console.
  
  for (var j = 0; j < x.length; j++) {  //Going through x array.
    if (x[j] >= num ) {
    	return x.indexOf(x[j]);         //Returning indexOf the element which is greater or even to "num" (15 in this example).
    } else if (j === x.length - 1) {    
    	return (x.indexOf(x[j]) + 1);   //!!!BETTER: return x.length;!!! If it couldn't find element which is greater or even to "num" its returning indexOf the last element in array plus integer one.
    }
  }
  
}
getIndexToIns([2, 5, 10], 15); // should return 3.