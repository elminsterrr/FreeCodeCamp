/*
In this example, we have defined a function makeAdder(x)
which takes a single argument x and returns a new function.
The function it returns takes a single argument y,
and returns the sum of x and y.

In essence, makeAdder is a function factory — it creates functions
which can add a specific value to their argument. In the above
example we use our function factory to create two new functions
— one that adds 5 to its argument, and one that adds 10.

add5 and add10 are both closures.
They share the same function body definition,
but store different environments. 

In add5's environment, x is 5. 
As far as add10 is concerned, x is 10.
*/

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12