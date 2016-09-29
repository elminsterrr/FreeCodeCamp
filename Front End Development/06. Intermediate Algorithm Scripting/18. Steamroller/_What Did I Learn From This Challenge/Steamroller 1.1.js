//https://repl.it/Diyk/1
//start-------------------------------------------
function steamrollArray(arr) {
  console.log(arr);

  var i;
  var newArr = [];
  var endArray = [];
  for (i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === 'object') {
      steamrollArray(arr[i]);
      console.log('i:',i, arr[i], typeof(arr[i]));
    } else  {
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


//https://repl.it/Diyk/1
//start-------------------------------------------
function steamrollArray(arr) {
  console.log(arr[0]); //1
  console.log(arr[1]); //[ 2 ]
  console.log(arr[2]); //[ 3, [ [ 4 ] ] ]
  console.log(arr[3]);//break
  
}
steamrollArray([1, [2], [3, [[4]]]]);  //should return [1, 2, 3, 4].
//steamrollArray([[["a"]], [["b"]]]);  //should return ["a", "b"].
//steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4].
//end---------------------------------------------


Array.isArray(2);