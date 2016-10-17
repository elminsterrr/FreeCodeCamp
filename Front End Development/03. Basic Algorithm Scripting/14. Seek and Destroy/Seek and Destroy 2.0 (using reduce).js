/*
Instructions:
You will be provided with an initial array
(the first argument in the destroyer function),
followed by one or more arguments.

Remove all elements from the initial array 
that are of the same value as these arguments.
*/
function destroyer(arr) {
  var argumenstsReady = Array.prototype.slice.call(arguments);
  var reducePutToWork = argumenstsReady.reduce(function(a, b) {
    return destroyerBeta(a, b);
  });
  function destroyerBeta(arr) {
    var args = Array.prototype.slice.call(arguments);
    //console.log('hello>', args);
    function tester(element) { 
      return args.indexOf(element) === -1;  
    }
    var filtering = arr.filter(tester);     
    return filtering;                        
  }
  return reducePutToWork;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3); //should return [1, 1]