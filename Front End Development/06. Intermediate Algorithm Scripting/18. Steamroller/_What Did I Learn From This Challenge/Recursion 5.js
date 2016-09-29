/*
Recursion
https://repl.it/DfAW/0


Iterative recursion

Did you get through the last section ok? 
No bruises or mental scars? Good work. 
Now let's notch up the difficulty a bit :).

To start deconstructing recursion, 
let's first take a look at the difference between 
loops and recursive functions. In many situations, 
they are effectively interchangeable. In fact, 
many programming languages don't have loops like 
for or while, but use recursion for everything.

In this example, each function does the same thing. 
One uses a loop, the other uses recursion.


Instructions

At the bottom of the code, 
call each of the two functions once 
and assign the result to the associated variable.

Try passing different integers as arguments to each function call.
*/
function loopFactorial(n) {
  var result = n;
  while (n > 1) {
    result = result * (n-1);
    n--;
  }
  return result;
}

function recursiveFactorial(n) {
  if (n < 0) {
    return console.log("Must be a positive integer.");
  }
  else if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

var loopResult = loopFactorial(5);
var recursiveResult =  recursiveFactorial(7);

console.log("The loop function returned: " + loopResult); //The loop function returned: 120
console.log("The recursive function returned: " + recursiveResult); //The recursive function returned: 5040