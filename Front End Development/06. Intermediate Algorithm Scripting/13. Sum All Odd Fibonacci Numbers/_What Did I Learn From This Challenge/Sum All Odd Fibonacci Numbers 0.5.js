/*
Given a positive integer num, return the sum of all odd Fibonacci 
numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers.
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers
less than 10 are 1, 1, 3, and 5.
*/



function sumFibs(number) {
  var tempArray = [];
  var finalArray = [];
  function buildFibonacci(max) {
    var i;
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    tempArray.push(fib[0]);
    tempArray.push(fib[1]);
    
    for(i=2; i<=max; i++) {
      // Next Fibonacci number = previous + one before previous
      // Translated to JavaScript:
      fib[i] = fib[i-1] + fib[i-2];
      tempArray.push(fib[i]);
    }
  }
  function isOddTest(array) {
    for (var j in array) {
      function isOdd(input) {
        return input % 2;
      }
      if(isOdd(j) === 1) {
        finalArray.push(j);
      }
    }
  }
  buildFibonacci(number);
  isOddTest(tempArray);
  return finalArray;
}

sumFibs(10);        //should return 10.
//sumFibs(1);       //should return a number.
//sumFibs(1000);    //should return 1785.
//sumFibs(4000000); //should return 4613732.
//sumFibs(4);       //should return 5.
//sumFibs(75024);   //should return 60696.
//sumFibs(75025);   //should return 135721. 