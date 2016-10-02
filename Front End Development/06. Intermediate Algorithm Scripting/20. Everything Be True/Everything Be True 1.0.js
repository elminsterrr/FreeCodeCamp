/*
Working example: https://repl.it/DmNd/0

Instructions: 
Check if the predicate (second argument) is truthy
on all elements of a collection (first argument).
*/
function truthCheck(collectionArray, secondArgument) {
  var collectionArrayObjectKeys = [];
  function realCheck(input) {
    //console.log(input);
    //If input (that means returned result from function truthCheckInside)
    //length is equal to length of collectionArray Object Keys array
    //then return true, else return false.
    //I created result from all cases when collectionArray[i][secondArgument]
    //was truthy. Then I simply comapred it's length to length of 
    //all provided collectionArrayObjectKeys.
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
      //If collectionArray[i][secondArgument] is true, that means that
      //this property name "sex" value (in this case "male") exist and
      //is not one of falsy values. Then push string "true" to an array result.
      if (collectionArray[i][secondArgument]) {
        result.push('true');
      }
    }
    //Save all collectionArray Object Keys to collectionArrayObjectKeys array.
    collectionArrayObjectKeys = Object.keys(collectionArray);
    return result;
  };
  //Final statement. If realCheck is true retrun true as result of whole truthCheck
  //function.
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