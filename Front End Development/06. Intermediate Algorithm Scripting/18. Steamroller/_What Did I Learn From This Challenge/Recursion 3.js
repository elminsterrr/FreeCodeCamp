/*
Recursion
https://repl.it/DfAW/0


Arguments in recursion

When building your recursive case (the code that will be repeated),
one of the rules of thumb is to ensure that the arguments you use 
for the recursion will lead to your base case.

If the value we pass to the recursive function call is the same
as the initial value, chances are our code will enter an infinite loop. 
And then, crash. Bad.

So, the question you have to ask yourself is "does the recursive case
modify my arguments in such a way that each recursion brings it one step
closer to the base case?


*/
function factorial(n) {
  // Termination condition to prevent infinite recursion
  if (n < 0) {
    console.log("Can't make a factorial from a negative number.");
    return;
  }
  // Base case
  if (n === 0) {
    return 1;
  }
  // What's wrong with this picture? Why won't this recursion work?
  return n * factorial(n);
}

factorial(6);