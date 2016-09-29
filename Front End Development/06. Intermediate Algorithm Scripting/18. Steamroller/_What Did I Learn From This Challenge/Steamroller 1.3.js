/*One way: Make steamrollArray work on arrays and other things too,
so you can steamRollArray all elements that we face.

Start the function by checking if arr is an array, and if not, return arr.

If it is an array, make an empty result array and a loop that concats
steamrollArray'ed elements to the result array, and return the result
array after the loop
*/

//start-------------------------------------------
function printElt(element, index, array) {
    print("[" + index + "] jest " + element);
}
[2, 5, 9].forEach(printElt);


function global(array) {
  function steamrollArray(arr) {
 arr.forEach(flattendArray);
    /*
    if(Array.isArray(arr)) {
      var result = [];
      var i;
      for (i = 0; i < arr.length; i++) {
        flattendArray(arr[i]);
        //Inside the loop you just concat the steamrolled elements to the result.
        result = result.concat(arr[i]); 
      }
      return result; 
    } else {
      return arr;
    }
    */
  }

  function flattendArray(input) {
    if(Array.isArray(input)) {
      input.forEach(flattendArray);

    } else {
      result.push(input);
    }
  }
  steamrollArray(array);
}

global([1, [2], [3, [[4]]]]);  //should return [1, 2, 3, 4].
//steamrollArray([[["a"]], [["b"]]]);  //should return ["a", "b"].
//steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4].
//end---------------------------------------------