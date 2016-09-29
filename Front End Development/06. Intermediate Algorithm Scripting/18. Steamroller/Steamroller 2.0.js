/*
Working example: https://repl.it/Dk87/0

Instructions: 
Flatten a nested array. 
You must account for varying levels of nesting.
*/
function steamrollArray(startingArray) {
  var result = [];
  function flattendArray(input) {
    if( Array.isArray(input) ) {
      return input.forEach(flattendArray);
    } else {
      return result.push(input);
    }
  }
  flattendArray(startingArray);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
/*
my thinking steps for this are something
like that:


1.inside flattendArray function if that element
is not array then push to result

2.but if that element is itself an array then
for each element of that element array 
you should call flattendArray function() again
*/