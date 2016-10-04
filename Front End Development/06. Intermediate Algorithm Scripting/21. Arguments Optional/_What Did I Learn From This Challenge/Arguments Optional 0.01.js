/*
Working example: https://...

Instructions: 
Create a function that sums two arguments together.

If only one argument is provided, then return a function 
that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, 
and addTogether(2) should return a function.

Calling this returned function with a single argument
will then return the sum: 

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
------------------------------------------------------------------------
1. It has to add two numbers passed as parameters and return the sum.

2. It has to check if any of the numbers are actual numbers, 
otherwise return undefined and stop the program right there.

3. It has to check if it has one or two arguments passed. More are ignored.

4. If it has only one argument then it has to return a function that uses 
that number and expects another one, to then add it.
*/
function addTogether() {
  var args = Array.from(arguments)
  console.log(args);
  return false;
}
//---TESTING---//
addTogether(2, 3); //should return 5.
//addTogether(2)(3); //should return 5.
//addTogether("http://bit.ly/IqT6zt"); //should return undefined.
//addTogether(2, "3"); //should return undefined.
//addTogether(2)([3]); //should return undefined.