/*
Write a function that splits an array (first argument)
into groups the length of size (second argument)
and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  //W związku z size=3 ( i = i + 3 ) ta iteracja zostanie wykonana tylko 2 razy.  
  for (var i = 0; i < arr.length; i = i + size) {  
    //Zaznacza 0,1,2 w pierwszym ruchu od 0,3 (bez 3),
    //a w drugim 3,4,5 od 3 do 6 (bez 6).
    newArr.push(arr.slice(i, i + size));
    console.log("Log: " + i);
  }
return newArr;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);