//start-------------------------------------------
function steamrollArray(arr) {
  console.log('staArr', arr);
  var i;
  var newArr = [];
  var endArray = [];
  for(i = 0; i <arr.length; i++) {
    if(Array.isArray(arr[i])) {
      //Prawdopodobnie trzeba napisać funkcję, która będzie grzebała do skutku w array, aż dogrzebie się do liczby.
      newArr.push(arr[i]);
    } else {
      endArray.push(arr[i]);
    }
  }
  console.log('newArr', newArr);
  console.log('endArr', endArray);
  return 1;
}

steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4].
//steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
//steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].
//end---------------------------------------------