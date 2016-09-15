/*
Working example: https://

Instructions: 
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having
only two divisors, one and itself. For example, 2 is a prime number
because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  var i;
  var sum = 0;
  for(i = 0; i<num; i++) {
    sum++;
  }
  return sum;
}

sumPrimes(10);