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
  let saveIt = [];
  let arraysOfDuplicate = [];
  let reduced = [];
  // Finding same product names
  arr2.filter(function(compareElement) {
    arr1.filter(function(arr1Element) {
      if (arr1Element[1].indexOf(compareElement[1]) !== -1) {
        saveIt.push(compareElement[1]);
      }
      return 99999;
    });
    return 99999;
  });
  // Storing the same values
  saveIt.map(function(oneSavedItem) {
    // Storing the same values from first product list
    arr1.map(function(arr1El) {
      console.log('Checking: ', arr1El[1], '( should be === ', oneSavedItem, ')');
      if (oneSavedItem === arr1El[1]) {
        console.log('Found and saving...', arr1El);
        arraysOfDuplicate.push(arr1El);
      }
    });
    // Storing the same values from second product list
    arr2.map(function(arr2El) {
      console.log('Checking: ', arr2El[1], '( should be === ', oneSavedItem, ')');
      if (oneSavedItem === arr2El[1]) {
        console.log('Found and saving...', arr2El);
        arraysOfDuplicate.push(arr2El);
      }
    });
  });
  console.log(arraysOfDuplicate);
  // Summing same product
  reduced = arraysOfDuplicate.reduce(function(acc,currentValue,index) {
    console.log('currentValue ->', currentValue);
    console.log('currentValue[1] ->', currentValue[1]);
    // arr[arr.length-1] is always the last element of an array arr.
    // So if the item being iterated has the same name [1] as the last item
    // in the accumulator, we add the number to the quantity of the last item
    // in the accumulator.
    if (index>0 && currentValue[1] === acc[acc.length-1][1]) { // acc[acc.length-1][1] it is name in last iteration
      acc[acc.length-1][0] += currentValue[0]; // [0] are storing quantity
    } else {
      acc.push(currentValue);
    }
    return acc;
  },[]);
  return reduced;
}
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];