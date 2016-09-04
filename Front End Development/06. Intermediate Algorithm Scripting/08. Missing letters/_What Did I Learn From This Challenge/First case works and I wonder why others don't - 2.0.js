function fearNotLetter(str) {
  var myGoal = '';
  var givenNumbersArray = [];
  var splitted = str.split('');
  for (var z = 0; z < splitted.length; z++) { 
    var test = splitted[z];
    console.log('!', test);
    var numbersArray = [];
    for (var i = 0; i < 19; i++) {
      var nextNumber = 61 + i;
      numbersArray.push(nextNumber);
    }
    for (var j = 0; j < numbersArray.length; j++) {
      if(test === String.fromCharCode(parseInt(numbersArray[j], 16))) {
        console.log('HEY!');
        //givenNumbersArray.push(numbersArray[j]);
      }
    }
  }
  console.log('test:', givenNumbersArray);
  var almostReady = searchingForMissingNumbers(givenNumbersArray);
  myGoal = String.fromCharCode(parseInt(almostReady, 16));
  function searchingForMissingNumbers(x) {
    console.log('Decoded Array:', x);
    var numArray = x;
    for(var k = 1; k < numArray.length; k++) {
      if(numArray[k] - numArray[k-1] != 1) {
        var difference = numArray[k] - numArray[k-1];
        console.log('difference: ', difference);
        console.log('numArray[k]:', numArray[k]);
        console.log('numArray[k-1]]:', numArray[k-1]);
        var iWasLookingForYou = numArray[k] - 1;
        console.log('iWasLookingForYou: ', iWasLookingForYou);
        return iWasLookingForYou;
      }
    }
  }
  return myGoal;
}

fearNotLetter("abcdefghjklmno");

//should return "i". 