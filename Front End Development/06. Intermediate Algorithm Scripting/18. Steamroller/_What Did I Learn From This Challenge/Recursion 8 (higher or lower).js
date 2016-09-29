/*
https://repl.it/DhCX/1
Recursion

Higher or lower?

Nice job on the sheep. You're moving along!

In the previous exercises, we've used loops and recursions 
with an explicit limit to the number of times they will repeat. 
What do we do when we don't know how many times to execute the code?

One simple example of this is a number guessing game. 
Our program should repeat until the user guesses the correct number.
Since the number of guesses is impossible to predict, we can use 
recursion to repeat the function until the correct answer is guessed.
(We could also use a while loop here, but we'll get to that discussion later.)
*/

function guessNumber(number) {
  // Prompt the user for a number
  var guess = prompt("Guess a number between 1 and 100.");
  
  // Convert their guess to a number using +
  guess = +guess;

  // Define base case
  if ( guess === number) {
    console.log("You got it! The number was " + number + "!");
    alert("You got it! The number was " + number + "!");
    return number;
  } else if ( guess > number ) {
  // Define recursive case with a function call
    console.log("Number ", guess, " is too hight! You didn't guess!");
    alert("Too hight! You didn't guess!");
    return guessNumber(number);
  } else {
    console.log("Number ", guess, " is too low! You didn't guess!");
    alert("Too low! You didn't guess!");
    return guessNumber(number);
  }
}

// Call the function guessNumber() with an integer for an argument
guessNumber(5);