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
    var saveIt = [];
    
    var done = arr2.filter(function(compareElement) {
      
      console.log('#', compareElement[1]);
    
      var done2 = arr1.filter(function(arr1Element) {
        console.log('@', arr1Element[1]);
        console.log(arr1Element[1].indexOf(compareElement[1]) !== -1);
        if (arr1Element[1].indexOf(compareElement[1]) !== -1) {
          saveIt.push(compareElement[1]);
        }
        return arr1Element[1].indexOf(compareElement[1]) !== -1;
      });
      
      console.log('!', done2)
    
    });
    
    arr2.map(function(arr2Element) {
      console.log(arr2Element);
      return 1;
    });
    return saveIt;
}

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

updateInventory(curInv, newInv);