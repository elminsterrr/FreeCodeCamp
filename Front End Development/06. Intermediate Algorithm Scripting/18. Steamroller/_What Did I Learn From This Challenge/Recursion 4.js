/*
Recursion
https://repl.it/DfAW/0

Now you try

Now that we've covered the bare essentials, 
try rebuilding the factorial() function we've been working on,
but this time write it all from scratch. To help you along, 
here are five questions that you can use whenever using recursion in your code:

What is/are the base case(s)?
What is/are the recursive case(s)?
Have I included any other necessary termination condition(s)?
Do the statements in the function lead to the base case?
Does the recursion build on the base case until the desired result is returned by the function?

Instructions:
Define the base case. 
Since a factorial is multiplying an integer 
by each integer between it and one, the base case is one.

Define the recursive case. What action needs to be performed
over and over again in order to achieve the desired result?

Write any termination conditions to prevent the function from
accepting arguments that would trigger an error.
*/
function factorial(n) {
  //Base case
  if( n === 0 ) {
    return 1;
  }
  return n * factorial( n - 1 );
}

factorial(5); //120