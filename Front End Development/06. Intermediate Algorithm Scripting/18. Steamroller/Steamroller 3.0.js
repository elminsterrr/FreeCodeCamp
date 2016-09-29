/*
Working example: https://repl.it/Dk8b/0

Instructions: 
Flatten a nested array. 
You must account for varying levels of nesting.
*/
function steamrollArray(array) {
  return array.reduce(function(accumulator, next) {
  //we have to specify the accumulator
    if( Array.isArray(next) ) {
      return steamrollArray(accumulator.concat(next));
    } else {
      return accumulator.concat(next);
    }

  }, []);// Here this is [] the starting accumulator (empty array)
}
steamrollArray([1, [2], [3, [[4]]]]);