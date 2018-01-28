function triple(x) {
  return x * 3
}

console.log(triple(50)) // 150

// ES6 version
const double = x => x * 2

console.log(double(50)) // 100

// Almost every language has some kind of support for functions.

// Some languages go further and provide support for functions as first-class constructs. By “first-class”, I mean that functions can be used in the same way as other kinds of values. You can:

// -refer to them from constants and variables
// -pass them as parameters to other functions
// -return them as results from other functions

// JavaScript is one such language, and we’ll be taking advantage of that.

// http://randycoulman.com/blog/2016/05/24/thinking-in-ramda-getting-started/