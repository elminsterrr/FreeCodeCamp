/*One way: Make steamrollArray work on arrays and other things too,
so you can steamRollArray all elements that we face.

Start the function by checking if arr is an array, and if not, return arr.

If it is an array, make an empty result array and a loop that concats
steamrollArray'ed elements to the result array, and return the result
array after the loop
*/

//start-------------------------------------------
function steamrollArray(arr) {
  if(Array.isArray(arr)) {
    var result = [];
    var i;
    for (i = 0; i < arr.length; i++) {
      //Inside the loop you just concat the steamrolled elements to the result.
      result = result.concat(arr[i]); 
    }
    return result; 
  } else {
    return arr;
  }
}

steamrollArray([1, [2], [3, [[4]]]]);  //should return [1, 2, 3, 4].
//steamrollArray([[["a"]], [["b"]]]);  //should return ["a", "b"].
//steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4].
//end---------------------------------------------