/*
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {

var newArr;
newArr = arr.splice(0,howMany);  //Metoda splice - array.splice(index,howmany,item1,.....,itemX).

console.log(newArr);             //Elementy usunięte.
console.log(arr);                //To co zostało po zastosowaniu metody splice.
  
  return arr;                    //Zwraca to co zostało.
}

slasher([1, 2, 3], 2);

