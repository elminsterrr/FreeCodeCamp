/*
sym(A, B, C) Translates to sym(sym(A,B),C)

Or in plain English - First find the Symmetric Difference of Set A and Set B. Then find the Symmetric Difference of this new set and Set C.

So -

sym([1, 2, 5], [2, 3, 5], [3, 4, 5])

would equal

[1,4,5]
*/
function sym(args) {
  var argumenstsReady = Array.prototype.slice.call(arguments);
  console.log('Starting point:', argumenstsReady);
  /* Elminster White - My example
  var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
  });
  //flattened is [0, 1, 2, 3, 4, 5]
  */
  var reducedToSymmetricDifference = argumenstsReady.reduce(function(a, b) {
     return destroyer(a, b);
  });
  function destroyer(arr, second) {
  	var args = Array.prototype.slice.call(arguments);
    function firstCase(arr) {
      function tester1(element) { 
        //console.log(element);   //Elements to 1, 2 i 3.
        //console.log(args[1]);   //"args[1]" to [ 5, 2, 1, 4 ]
        //Dla elementów (1, 2 i 3) których nie ma w "args[1]" czyli w [ 5, 2, 1, 4 ]
        //zwraca -1 === -1 czyli true. 
        //
        //Skoro funkcja tester zwraca true to metoda 
        //filter bierze ten element do zwracanej wartości w wierszu 22.
        //W tym przypadku funkcja tester1 zwróci array [3], 
        //ponieważ tylko dla tej wartości args[1].indexOf(element) === -1 zwróci wartość true.
        return args[1].indexOf(element) === -1;  
      }
      //Bierze PIERWSZY ARGUMENT z funkcji "destroyer" czyli "arr"
      //i filtruje go przy użyciu funkcji callback (tester1).
      //Funkcja filter przy zastosowaniu funkcji callback (tester1)
      //sprawdza czy ELEMENTY z array "args[1]" [ 5, 2, 1, 4 ]
      //posiadają indexOf dla POSZCZEGÓLNYCH ELEMENTÓW z "arr" 
      //[1, 2, 3], pobieranych jako poszczególny "element".
      var filtering1 = arr.filter(tester1);
      return filtering1;  
    }
    function secondCase(second) {
      function tester2(element) { 
        //console.log('element:', element); //Elements to 5, 2, 1 i 4.
        //console.log(args[0]);  //"args[0]" to [ 1, 2, 3 ]
        //Dla elementów których nie ma w "args[0]" [1, 2, 3] 
        //zwraca -1 === -1 czyli true. 
        //
        //Skoro funkcja tester zwraca true to metoda 
        //filter bierze ten element do zwracanej wartości w wierszu 38.
        //W tym przypadku funkcja tester zwróci array [ 5, 4 ], 
        //ponieważ tylko dla tych dwóch wartości args[0].indexOf(element) === -1 zwróci wartość true.
        return args[0].indexOf(element) === -1;  
      }
      var filtering2 = second.filter(tester2);
      //Bierze DRUGI ARGUMENT z funkcji "destroyer" czyli "second"
      //i filtruje go przy użyciu funkcji callback (tester2).
      //Funkcja filter przy zastosowaniu funkcji callback (tester2)
      //sprawdza czy ELEMENTY z array "args[0]" [1, 2, 3]
      //posiadają indexOf dla POSZCZEGÓLNYCH ELEMENTÓW z "second" 
      //[5, 2, 1, 4], pobieranych jako poszczególny "element".
      return filtering2;
    }
    var mergedArray = firstCase(arr).concat(secondCase(second)); // Merges both arrays var array3 = array1.concat(array2);
    console.log('Merged, but unsorted:', mergedArray);
    var mergedAndSorted = mergedArray.sort(function(a, b) {
      return a - b; 
    });
    return mergedAndSorted;
  }
  return reducedToSymmetricDifference;
}
//sym([1, 2, 3], [5, 2, 1, 4]); //should return [3, 4, 5].
//sym([1, 2, 3], [5, 2, 1, 4]); //should contain only three elements.
//sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should return [1, 4, 5]
//sym([1, 2, 5], [2, 3, 5], [3, 4, 5]); //should contain only three elements.
//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should return [1, 4, 5].
//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]); //should contain only three elements.
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should return [2, 3, 4, 6, 7].
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]); //should contain only five elements.
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should return [1, 2, 4, 5, 6, 7, 8, 9].
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should contain only eight elements.