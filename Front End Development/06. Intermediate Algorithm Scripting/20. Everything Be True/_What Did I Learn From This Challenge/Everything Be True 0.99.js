/*
Working example: https://...

Instructions: 
Check if the predicate (second argument) is truthy
on all elements of a collection (first argument).

Remember, you can access object properties 
through either dot notation or [] notation.
*/
/*
Working example: https://...

Instructions: 
Check if the predicate (second argument) is truthy
on all elements of a collection (first argument).

Remember, you can access object properties 
through either dot notation or [] notation.
*/
function truthCheck(collectionArray, secondArgument) {
  var collectionArrayObjectKeys = [];
  function realCheck(input) {
    //console.log(input);
    if (input.length === collectionArrayObjectKeys.length) {
      console.log('Yes! It is truthy on all elements of a collection!');
      return true;
    } else {
      return false;
    }
  }
  var truthCheckResult = function truthCheckInside(collectionArray, secondArgument) {
    var result = [];
    var i;
    for (i = 0; i < collectionArray.length; i++) {
      //console.log(collectionArray[i][secondArgument]);
      if (collectionArray[i][secondArgument]) {
        result.push('true');
      }
    }
    collectionArrayObjectKeys = Object.keys(collectionArray);
    return result;
  };
  if (realCheck(truthCheckResult(collectionArray, secondArgument))) {
    return true;
  } else {
    return false;
  }
}
//---TESTING---//
truthCheck(
[
  {
  "user": "Tinky-Winky",
  "sex": "male"
  },
  {
  "user": "Dipsy",
  "sex": "male"
  },
  {
  "user": "Laa-Laa",
  "sex": "female"
  },
  {
  "user": "Po",
  "sex": "female"
  }
],
 "sex"); //should return true.

/*
truthCheck(

[
  {
  "user": "Tinky-Winky",
  "sex": "male"
  },
  {
  "user": "Dipsy"
  },
  {
   "user": "Laa-Laa",
   "sex": "female"
  },
  {
  "user": "Po",
  "sex": "female"
  }
],

 "sex"); //should return false.
*/

//truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"); //should return false.

//truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");  //should return false
//truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"); //should return true
//truthCheck([{"single": "yes"}], "single"); //should return true

//truthCheck([{"single": ""}, {"single": "double"}], "single"); //should return false
//truthCheck([{"single": "double"}, {"single": undefined}], "single"); //should return false
//truthCheck([{"single": "double"}, {"single": NaN}], "single"); //should return false

//truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); //should return false.
//truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"); //should return false.

//truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");  //should return false
//truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"); //should return true
//truthCheck([{"single": "yes"}], "single"); //should return true

//truthCheck([{"single": ""}, {"single": "double"}], "single"); //should return false
//truthCheck([{"single": "double"}, {"single": undefined}], "single"); //should return false
//truthCheck([{"single": "double"}, {"single": NaN}], "single"); //should return false