/*
Working example: http://repl.it/D3jl

Instructions: Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  var lastOne;
  var newArr = [];
  var specialTheory = special(str);
  function special(input) {
    var testRegEx = str.split(/(?=[A-Z])/);
    return testRegEx;
  }
  for(var i = 0; i<specialTheory.length; i++) {
    if(i === specialTheory.length - 1 ) {
      newArr.push(specialTheory[i]);
    } else {
      if(specialTheory[i].match(/\s/g)) {
        newArr.push(specialTheory[i]);
      } else {
        newArr.push(specialTheory[i] + ' ');
      } 
    }
  }
  var newStr = newArr.join('').toLowerCase().replace(/\s/g, '-');
  if(newStr.match(/\_-/g)) {
    lastOne = newStr.replace(/\_-/g, '-');
  } else {
    lastOne = newStr;
  }
  return lastOne;
}
spinalCase("This Is Spinal Tap");//should return "this-is-spinal-tap".
//spinalCase("thisIsSpinalTap");//should return "this-is-spinal-tap".
//spinalCase("The_Andy_Griffith_Show"); //should return "the-andy-griffith-show".
//spinalCase("Teletubbies say Eh-oh");//should return "teletubbies-say-eh-oh".
//spinalCase("AllThe-small Things"); //should return "all-the-small-things".