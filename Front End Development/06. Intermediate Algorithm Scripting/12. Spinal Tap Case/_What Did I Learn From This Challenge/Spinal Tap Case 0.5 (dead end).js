function spinalCase(str) {
  var firstStep;
  if (str.match(/\_/g)) {
    firstStep = str.replace(/\_/g, '-');
    }
  console.log(firstStep);
  var newStr;
  var newArr = [];
  var specialTheory = special(firstStep);
  function special(input) {
    var test = input.split(/(?=[A-Z])/);
    return test;
  }
  console.log(specialTheory);
  for(var i = 0; i<specialTheory.length; i++) {
  	
  	if(specialTheory[i].match(/\s/g)) {
  	  newArr.push(specialTheory[i]);
  	  console.log(specialTheory.length);
  	} else {
  		newArr.push(specialTheory[i]+ ' ');
  	}
  }
  console.log(newArr);
  var joinedArr = newArr.join('');
  var finalVar = finalTest(joinedArr);
  function finalTest(finalInput) {
  	var toLowerCase = finalInput.toLowerCase();
  	newStr = toLowerCase.replace(/\s/g, '-'); 
    return newStr;  	
  }
  return finalVar;
}

//spinalCase("AllThe-small Things");// should return "the-andy-griffith-show".
//spinalCase("This Is Spinal Tap");//should return "this-is-spinal-tap".
//spinalCase("thisIsSpinalTap");//should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); //should return "the-andy-griffith-show".
//spinalCase("Teletubbies say Eh-oh");//should return "teletubbies-say-eh-oh".
//spinalCase("AllThe-small Things"); //should return "all-the-small-things". 