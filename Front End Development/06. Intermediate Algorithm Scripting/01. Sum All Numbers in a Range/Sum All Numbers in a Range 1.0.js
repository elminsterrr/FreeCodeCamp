/*
Working example: https://repl.it/D7IE

Instructions: We'll pass you an array of two numbers. Return the sum of those two 
numbers and all numbers between them.
*/
function sumAll(startingArray) {
  var allNumbersArr = [];

  function maxMinOrder(arr) {                   //Function sorts array from max value to min value, example [1, 4] => [4, 1].
    function compare(a, b) {
      return b - a;
    }
    console.log("#",arr.sort(compare));
    return arr.sort(compare);
  }

  function findAllNumbers(x, y) {               //Function creates array with this two numbers [4, 1] and all numbers between them, for example [4, 1] => [4, 3, 2, 1].
    allNumbersArr.push(x);
    while (x !== y) {
      x--;                                      //Short notation for x = x - 1.
      allNumbersArr.push(x);   
    }
  }

  var newArr = maxMinOrder(startingArray);      //Data enter here!
  var maxValue = newArr[0];
  var minValue = newArr[1];

  findAllNumbers(maxValue, minValue);

  var totalSum = allNumbersArr.reduce(function(sum, value) { // Using reduce method to sum all numbers in array.
    console.log("Sum:", sum, "Value:", value);
    return sum + value;
  }, 0);                                                     // Zero is starting point for our function.

  console.log("Total sum: ", totalSum);
  return totalSum;
}

sumAll([1, 4]);