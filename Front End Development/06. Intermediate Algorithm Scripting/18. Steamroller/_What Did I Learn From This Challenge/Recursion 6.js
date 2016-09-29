/*
Recursion

Counting sheep

Ok, now that you've seen how recursion can act like a loop,
let's talk about how it does that.

In the function countSheepWithLoop(),
there is a for loop that performs a block of code as many times
as the condition statement allows. In this case, it will start
with i = 1 and then evaluate the code as long as i is less than
or equal to the argument passed to the function (represented by
the variable number).

The last part of the conditional statement in the for loop is 
the incrementor i++. This is computer speak for "increase i by 
one with every iteration". i++ defines what changes with each iteration.

Our recursive function countSheep uses the same principle, except
instead of counting up (i++), it is counting down from number. 
When number is equal to 0, the recursion stops. This is our base case.

Instructions
Look at the first function and figure out what actions it is performing.
Fill in the missing areas of the function countSheep() to replicate 
the logic in the first function, but using recursion.
*/
// Here is the function using a for loop
function countSheepWithLoop(number) {    
  for (var i = 1; i <= number; i++) {
    if (i === number) {
      console.log("Zzzzzz");
      return 'I fell asleep';
    }
    console.log("Another sheep jumps over the fence.");
  }
}

countSheepWithLoop(10);

//BETTER:
function countSheep(number) { 
  console.log(number); 
  if (number !== 0) {
    console.log("Another sheep jumps over the fence."); 
    var newNumber = number - 1; 
    countSheep(newNumber); 
  } return 'I fell asleep';
}
countSheep(5);

//ANOTHER EXAMPLE:
/*
!!!!!!!!!!!!!
You could also fix your code by return countSheep(newNumber);,
which passes the "I fell asleep" back the whole call stack.
*/
// And here is the recursive function
function countSheep(number) {
  console.log(number);
  if (number === 0) {
    // Put your base case here
    return 'I fell asleep';
  } else {
  console.log("Another sheep jumps over the fence.");
  // Define the variable newNumber as 
  // 1 less than the input variable number
  var newNumber = number - 1;
  // Recursively call the function
  // with newNumber as the parameter
  return countSheep(newNumber);
  }
}

// Call your new recursive function:
countSheep(5);
