// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array.
//
// For example, ['hello', 'Hello'], should return true because all of
// the letters in the second string are present in the first, ignoring case.
//
// The arguments ['hello', 'hey'] should return false because
// the string 'hello' does not contain a 'y'.
//
// Lastly, ['Alien', 'line'], should return true because all of the letters
// in 'line' are present in 'Alien'.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function mutation (arr) {
  let split;
  let splitAndLow;
  let isItEven = false;
  let aArrayGlobal;
  let bArrayGlobal;
  let finalTest = [];
  let afterUndefinedWasCleared;

  function makeItLowerCase (oneArrayOfWord) {
    let toLower = oneArrayOfWord.map(el => el.toLowerCase());
    return toLower;
  }

  function checker (justOneLetterFromB) {
    let checked = aArrayGlobal.find(function (el) {
      return justOneLetterFromB === el;
    });
    finalTest.push(checked);
  }

  function clearUndefined (data) {
    data = data.filter(function (element) {
      return element !== undefined;
    });
    return data;
  }

  function compare (input) {
    let aArray = input[0];
    let bArray = input[1];
    aArrayGlobal = aArray;
    bArrayGlobal = bArray;

    bArray.forEach(function (arg) {
      checker(arg);
    });

    afterUndefinedWasCleared = clearUndefined(finalTest);

    if (afterUndefinedWasCleared.length === bArrayGlobal.length) return true;
    return false;
  }

  split = arr.map(el => el.split(''));
  splitAndLow = split.map(makeItLowerCase);
  isItEven = compare(splitAndLow);

  return isItEven;
}

// mutation(['hello', 'hey']); // should return false.
mutation(['hello', 'Hello']); // should return true.
// mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']); // should return true.
// mutation(['Mary', 'Army']); // should return true.
// mutation(['Mary', 'Aarmy']); // should return true.
// mutation(['Alien', 'line']); // should return true.
// mutation(['floor', 'for']); // should return true.
// mutation(['hello', 'neo']); // should return false.
// mutation(['voodoo', 'no']); // should return false.
