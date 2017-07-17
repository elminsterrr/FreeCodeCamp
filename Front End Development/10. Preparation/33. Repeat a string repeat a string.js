// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return '';
  }
  return str.repeat(num);
}

repeatStringNumTimes("abc", 3); //should return "abcabcabc".
