/*One way: Make steamrollArray work on arrays and other things too,
so you can steamRollArray all elements that we face.

Start the function by checking if arr is an array, and if not, return arr.

If it is an array, make an empty result array and a loop that concats
steamrollArray'ed elements to the result array, and return the result
array after the loop
---------------------------------------------------------
my thinking steps for this are something like that

1.for each element of arr call flattendArray function(element)
2.inside flattendArray function if that element is not array then push to result
3.but if that element is itself an array then for each element
of that element array called flattendArray function() again


*/

//start-------------------------------------------
function steamrollArray(startingArray) {
  var result = [];
  function steamrollArrayInside(arr) {
    if( Array.isArray(arr) ) {
      arr.forEach(function() {
        //Inside the loop you just concat the steamrolled elements to the result.
        result = result.concat(flattendArray(arr)); 
      });
      return result; 
    } else {
      return arr;
    }
  }
  function flattendArray(input) {
    if( Array.isArray(input) ) {
      return input.forEach(flattendArray);
    } else {
      return result.push(input);
    }
  }
  return steamrollArrayInside(startingArray);
}
steamrollArray([1, [2], [3, [[4]]]]);  //should return [1, 2, 3, 4].
//steamrollArray([[["a"]], [["b"]]]);  //should return ["a", "b"].
//steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4].
//end---------------------------------------------