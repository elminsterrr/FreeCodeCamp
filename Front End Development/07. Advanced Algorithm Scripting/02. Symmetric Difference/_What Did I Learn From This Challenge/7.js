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
destroyer([1, 2, 3], [5, 2, 1, 4]); //should return [3, 4, 5]