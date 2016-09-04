
function fearNotLetter(str) {
  var decodedArr = [];
  var upper = str.toUpperCase();
  var splittedInputData = upper.split('');  
//example from: fearNotLetter("abce")  --> [ 'A', 'B', 'C', 'E' ]

  for (var i in splittedInputData) {
    var decodedValue = splittedInputData[i].charCodeAt();
    decodedArr.push(decodedValue);
  }
  
  console.log('#: ', decodedArr);


/*

  var completeList = String.fromCharCode(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90);
//completeList = ABCDEFGHIJKLMNOPQRSTUVWXYZ
console.log(completeList[0]);
console.log(splittedInputData[0]);
*/
  /*
  newArr = completeList.filter(function(obiekt) {  
  
  Metoda filter wykonuje dostarczoną funkcję callback 
  dla każdego elementu tablicy tworząc nową tablicę 
  z wszystkich tych elementów, dla których funkcja callback
  zwróciła wartość true. 
  
    for (var i in splittedInputData) {                          
      
      if (splittedInputData[i] === completeList[i]) {
        return true;  
      }
    }
    return false;
  });
  */

  return 1;
}

fearNotLetter("abce");


//fearNotLetter("abce") should return "d". 