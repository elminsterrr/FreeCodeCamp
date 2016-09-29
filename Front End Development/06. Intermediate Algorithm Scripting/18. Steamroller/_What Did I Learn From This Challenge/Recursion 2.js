/*
Recursion
https://repl.it/DexK/1


Termination Condition

One other useful (and often necessary) feature of a recursive function
is a termination condition.

This is a specific statement that will explicitly stop the recursion.
The base case is a form of termination condition, though for our 
purposes here I will use termination condition to describe a statement
that will cancel recursion in the event of bad input or other potential error.

To put this into practice, look at the factorial function. What would happen
if we called it on a negative integer? Since the recursion will only stop when n
is equal to 0, and that would never happen with a negative integer, our program would crash.

In order to protect against this, we use a termination condition to ensure that the value
passed to the function is valid, and will not crash our program. As a programmer, you must
constantly be thinking about how to prepare for any type of situation and ensure that your
code can handle it correctly.


*/
function factorial(n) {
  if (n < 0) {
    console.log("Negative numbers are not allowed!");
    return;
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // Recursive case
  return n * factorial(n -1);
}

factorial(-1);
factorial(5);