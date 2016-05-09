/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.
*/

function repeatStringNumTimes(str, num) {
  
  var result = "";
  for (var i= 0; i<num; i++) {
    result++;                     //The same as: result = result + str;
  }
  
  return result;
}

repeatStringNumTimes("abc", 3);