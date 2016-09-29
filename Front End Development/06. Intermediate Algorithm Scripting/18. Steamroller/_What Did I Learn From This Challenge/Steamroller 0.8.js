//https://repl.it/Diyc/0
//start-------------------------------------------
var endArray = [];

function steamrollArray(arr) {
  console.log('staArr', arr);
  var i;
  var newArr = [];
  for(i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      var j;  
      for(j = 0; j < arr[i].length; j++) {
        console.log('arr[i][j]:', arr[i][j]);
        console.log(typeof ( arr[i][j] ));
        if(typeof(arr[i][j]) === 'number') {
          endArray.push(arr[i][j]);
        } else {
          steamrollArray(arr[i][j]);
        }
      }
      //Prawdopodobnie trzeba napisać funkcję, która będzie grzebała do skutku w array, aż dogrzebie się do liczby.
      //newArr.push(arr[i]);
    } else {
      endArray.push(arr[i]);
    }
  }
  console.log('newArr', newArr);
  console.log('endArr', endArray);
  return endArray;
}


steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4].
//steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
//steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].

//end---------------------------------------------


staArr [ 1, [ 2 ], [ 3, [ [Object] ] ] ]
arr[i][j]: 2
arr[i][j]: 3
arr[i][j]: [ [ 4 ] ]
newArr []
endArr [ 1 ]
=> 1