/*
Recursion
https://repl.it/DexK/0

If you remember from math class, when you take the factorial of a number,
you multiply that number by each number between itself and one. 
So the factorial of 5 is equal to 5 * 4 * 3 * 2 * 1, or 120.

In programming, factorials are a perfect example of a case when 
a recursive function should be used. Why? 
Because we are doing the same thing (multiplication) 
over again to a particular value (an integer) until we get the desired result.

*/

function factorial(n) {  
  // This is our Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

factorial(5);