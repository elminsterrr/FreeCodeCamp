/*
Working example: https://

Instructions: 
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having
only two divisors, one and itself. For example, 2 is a prime number
because it's only divisible by one and two.

The provided number may not be a prime.
*/
'use strict';
function sumPrimes(num) {
  var i;
  var targetArray = [];
  for (i = 2; i <= num; i++) {
    if (isPrimeNumber(i)) {   //If isPrimeNumber(i) returns false, we don't and i to targetArray array.
      targetArray.push(i);
    }   
  }
  return targetArray.reduce(function(a, b) { return a + b; }); //We sum all the targetArray elements.
}

function isPrimeNumber(num) {
  var j;
  for (j = 2; j < num; j++) { //Primes have only two divisors, one and itself. So I'm checking if any number except one and num itself can divide it with no remainder.
    if (num % j === 0) {      //If num can be devided by j and it has no remainder.
      return false;           //If (if) is true then this num isn't a prime number so we can return false.
    }       
  } 
  return true;                //For all i we also check all j.
}

sumPrimes(10);