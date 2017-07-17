// Write a function that splits an array (first argument)
// into groups the length of size (second argument)
// and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {

  const z = [];

  for (let i = 0; i < arr.length; i += size) {
    const a = arr.slice( arr.indexOf(arr[i]) , (arr.indexOf(arr[i]) + size) );
    z.push(a);
  }

  return z;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
