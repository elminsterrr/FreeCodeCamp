/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of
the same value as these arguments.
*/

/*
If you want to turn arguments into an array so that you can do things like

 .slice(), .push() etc, use something like this:
var args = Array.prototype.slice.call(arguments);
Hint: 1
You need to work with arguments as if it was a regular array. 
The best way is to convert it into one.
Hint: 2
You need to filter, this also means you need to create a callback function, 
one that checks if the element is on the indexOf()
Hint: 3
To convert arguments into an array use this code var args = Array.prototype.slice.call(arguments);
*/
function destroyer(arr, second) {
  //console.log(arguments);
  /* 
  Wytłumaczenie działania Array.prototype.slice.call(arguments)
  http://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work
  */
  var args1 = Array.prototype.slice.call(arguments);
  var args2 = Array.prototype.slice.call(arguments);
  function firstCase(arr) {
    //console.log(args1);    //Podgląd na wygenerowaną array "args1".
    args1.splice(0, 1);      //Odcina pierwszy element z "args1".
    //console.log(args1);    //To co zostaje jako array "args1" po zastosowaniu splice.
    function tester1(element) { 
      //console.log(element);   //Elements to 1, 2 i 3.
      //console.log(args1[0]);  //Wyciąga dane z podwójnej array [[ 5, 2, 1, 4 ]]
      //Dla elementów (1, 2 i 3) których nie ma w "args1[0]" [ 5, 2, 1, 4 ]
      //zwraca -1 === -1 czyli true. 
      //
      //Skoro funkcja tester zwraca true to metoda 
      //filter bierze ten element do zwracanej wartości w wierszu 43. 
      //W tym przypadku funkcja tester1 zwróci array [3], 
      //ponieważ tylko dla tej wartości args1[0].indexOf(element) === -1 zwróci wartość true.
      return args1[0].indexOf(element) === -1;  
    }
    /*
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //PRZEPISAĆ TO!
    //Bierze PIERWSZY ARGUMENT z funkcji "destroyer" czyli "arr" i filtruje go przy użyciu funkcji
    //callback (tester1). Funkcja filter przy zastosowaniu funkcji callback (tester1) sprawdza czy
    //ELEMENTY z array "args1[0]" [2, 3] posiadają indexOf dla POSZCZEGÓLNYCH ELEMENTÓW z "arr" 
    //[1, 2, 3, 1, 2, 3], pobieranych jako poszczególny "element".
    //PRZEPISAĆ TO!
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    */
    var filtering1 = arr.filter(tester1);
    return filtering1;  
  }
  function secondCase(second) {
    //console.log(args2);    //Podgląd na wygenerowaną array "args2".
    args2.splice(1, 2);    //Odcina drugi element z "args2".
    //console.log('To co zostaje:', args2);    //To co zostaje jako array "args2" po zastosowaniu splice.
    function tester2(element) { 
      //console.log('element:', element); //Elements to 5, 2, 1 i 4.
      //console.log(args2[0]);  //Wyciąga dane z podwójnej array [[ 1, 2, 3 ]]
      //Dla elementów których nie ma w "args2[0]" [1, 2, 3] 
      //zwraca -1 === -1 czyli true. 
      //
      //Skoro funkcja tester zwraca true to metoda 
      //filter bierze ten element do zwracanej wartości w wierszu 72. 
      //W tym przypadku funkcja tester zwróci array [ 5, 4 ], 
      //ponieważ tylko dla tych dwóch wartości args2[0].indexOf(element) === -1 zwróci wartość true.
      return args2[0].indexOf(element) === -1;  
    }
    var filtering2 = second.filter(tester2);     
    /*
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //PRZEPISAĆ TO!
    //Bierze PIERWSZY ARGUMENT z funkcji "destroyer" czyli "arr" i filtruje go przy użyciu funkcji
    //callback (tester). Funkcja filter przy zastosowaniu funkcji callback (tester) sprawdza czy
    //ELEMENTY z array "args1[0]" [2, 3] posiadają indexOf dla POSZCZEGÓLNYCH ELEMENTÓW z "arr" 
    //[1, 2, 3, 1, 2, 3], pobieranych jako poszczególny "element".
    //PRZEPISAĆ TO!
    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    */
    return filtering2;
  }
  /*
  var array1 = ["Vijendra","Singh"];
  var array2 = ["Singh", "Shakya"];
  var array3 = array1.concat(array2); // Merges both arrays
  */
  var mergedArray3 = firstCase(arr).concat(secondCase(second));
  console.log('merged:', mergedArray3);
  /*
  var points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return a-b});
  */
  var sorted = mergedArray3.sort(function(a, b) {
    return a - b; 
  });
  return sorted;
}
destroyer([1, 2, 3], [5, 2, 1, 4]); //should return [3, 4, 5].;