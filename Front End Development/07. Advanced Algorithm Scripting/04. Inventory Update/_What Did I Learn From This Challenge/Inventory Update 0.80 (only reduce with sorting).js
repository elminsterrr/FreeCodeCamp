/*
Working example: ...

Instructions:
Compare and update the inventory stored in a 2D array
against a second 2D array of a fresh delivery. Update
the current existing inventory item quantities (in arr1).

If an item cannot be found, add the new item and quantity
into the inventory array. The returned inventory array 
should be in alphabetical order by item.
*/

function updateInventory(arr1, arr2) {
  let mergeArrays = [];
  // First I combine two arrays into one
  mergeArrays = arr1.concat(arr2);
  // Next I am sorting mergeArrays (2D array) by second column (by name)
  mergeArrays.sort(function(a, b) {
    a = a[1];
    b = b[1];
    return a === b ? 0 : (a < b ? -1 : 1);
  });
  return mergeArrays.reduce(function(acc, currentValue, index) {
    console.log('currentValue ->', currentValue);
    console.log('currentValue[1] ->', currentValue[1]);
    // arr[arr.length-1] is always the last element of an array arr.
    // So if the item being iterated has the same name [1] as the last item
    // in the accumulator, we add the number to the quantity of the last item
    // in the accumulator.
    if (index > 0 && currentValue[1] === acc[acc.length-1][1]) { // acc[acc.length-1][1] it is name in last iteration
      acc[acc.length-1][0] += currentValue[0]; // [0] are storing quantity
    } else {
      acc.push(currentValue);
    }
    return acc;
    }, []);
}
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].