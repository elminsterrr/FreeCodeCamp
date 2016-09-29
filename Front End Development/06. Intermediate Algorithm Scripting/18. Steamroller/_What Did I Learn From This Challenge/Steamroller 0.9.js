//https://repl.it/Diyk/1
//start-------------------------------------------
var endArray = [];
function steamrollArray(arr) {
  var i;
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      var j;  
      for(j = 0; j < arr[i].length; j++) {
        if(typeof(arr[i][j]) === 'number') {
          endArray.push(arr[i][j]);
        } else {
          steamrollArray(arr[i][j]);
        }
      }
    } else {
      endArray.push(arr[i]);
    }
  }
  return endArray;
}


steamrollArray([1, [2], [3, [[4]]]]);  //should return [1, 2, 3, 4].
//steamrollArray([[["a"]], [["b"]]]);  //should return ["a", "b"].
//steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4].
//end---------------------------------------------