/*
The forEach() method executes a provided function once per array element.

Use Case: Iterate through an array
*/

var arr = [1,2,3,4,5,6,7,8];

// Uses the usual "for" loop to iterate
for(var i= 0, l = arr.length; i< l; i++){
  console.log(arr[i]);
}

console.log("========================");

//Uses forEach to iterate
arr.forEach(function(item,index){
  console.log(item);
});/