function spinalCase(str) {
  var lastOne;
  var newArr = [];
  var specialTheory = special(str);
  function special(input) {
    var test = str.split(/(?=[A-Z])/);
    return test;
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
  var joinedArr = newArr.join('');
  var toLowerCaseMethod = joinedArr.toLowerCase();
  var newstr = toLowerCaseMethod.replace(/\s/g, '-');
  if(newstr.match(/\_-/g)) {
    lastOne = newstr.replace(/\_-/g, '-');
  } else {
    lastOne = newstr;
  }
  return lastOne;
}
spinalCase("This Is Spinal Tap");//should return "this-is-spinal-tap".
//spinalCase("thisIsSpinalTap");//should return "this-is-spinal-tap".
//spinalCase("The_Andy_Griffith_Show"); //should return "the-andy-griffith-show".
//spinalCase("Teletubbies say Eh-oh");//should return "teletubbies-say-eh-oh".
//spinalCase("AllThe-small Things"); //should return "all-the-small-things".