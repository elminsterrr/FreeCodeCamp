// Write a function that splits an array (first argument)
// into groups the length of size (second argument)
// and returns them as a two-dimensional array.

function chunkArrayInGroups (arr, size) {
  const myGoal = [];

  for (let i = 0; i < arr.length; i += size) {
    const position = arr.indexOf(arr[i]);
    const sliced = arr.slice(position, (position + size));
    myGoal.push(sliced);
  }

  return myGoal;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
