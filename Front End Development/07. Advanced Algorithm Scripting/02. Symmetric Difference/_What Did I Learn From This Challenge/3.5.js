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
  var element = ""; 
  console.log(arguments);
  
  var args1 = Array.prototype.slice.call(arguments);
  var args2 = Array.prototype.slice.call(arguments);
  /* 
  Wytłumaczenie działania Array.prototype.slice.call(arguments)
  http://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work
  */
  function firstCase(arr) {

    console.log(args1);    //Podgląd na wygenerowaną array "args".
    args1.splice(0, 1);    //Odcina pierwszy element z "args".
    console.log(args1);    //To co zostaje jako array "args" po zastosowaniu splice.
    function tester(element) { 
      console.log(element)
      console.log(args1[0])
      return args1[0].indexOf(element) === -1;  
        //Dla elementów których nie ma w "args[0]" [1, 2, 3] 
        //zwraca -1 === -1 czyli true. 
        //Skoro funkcja tester zwraca true to metoda 
        //filter bierze ten element do zwracanej wartości w wierszu 42. 
        //W tym przypadku funkcja destroyer zwróci array [1, 1], 
        //ponieważ tylko dla tych dwóch jedynek args.indexOf(element) === -1 zwróci wartość true.
    }
    var filtering1 = arr.filter(tester);     
      //Bierze PIERWSZY ARGUMENT z funkcji "destroyer" czyli "arr" i filtruje go przy użyciu funkcji
      // callback (tester). Funkcja filter przy zastosowaniu funkcji callback (tester) sprawdza czy
      // ELEMENTY z array "args" [2, 3] posiadają indexOf dla POSZCZEGÓLNYCH ELEMENTÓW z "arr" 
      //[1, 2, 3, 1, 2, 3], pobieranych jako poszczególny "element".
    return filtering1;  
  }

  function secondCase(second) {
    console.log(args2);    //Podgląd na wygenerowaną array "args".
    args2.splice(1, 2);    //Odcina pierwszy element z "args".
    console.log('To co zostaje:', args2);    //To co zostaje jako array "args" po zastosowaniu splice.
    function tester(element) { 
      console.log('element:', element)
      console.log(args2[0])
      return args2[0].indexOf(element) === -1;  
      //Dla elementów których nie ma w "args[0]" [1, 2, 3] 
      //zwraca -1 === -1 czyli true. 
      //Skoro funkcja tester zwraca true to metoda 
      //filter bierze ten element do zwracanej wartości w wierszu 42. 
      //W tym przypadku funkcja destroyer zwróci array [1, 1], 
      //ponieważ tylko dla tych dwóch jedynek args.indexOf(element) === -1 zwróci wartość true.
    }
    var filtering2 = second.filter(tester);     
    //Bierze PIERWSZY ARGUMENT z funkcji "destroyer" czyli "arr" i filtruje go przy użyciu funkcji
    // callback (tester). Funkcja filter przy zastosowaniu funkcji callback (tester) sprawdza czy
    // ELEMENTY z array "args" [2, 3] posiadają indexOf dla POSZCZEGÓLNYCH ELEMENTÓW z "arr" 
    //[1, 2, 3, 1, 2, 3], pobieranych jako poszczególny "element".
    return filtering2;
  }

console.log(firstCase(arr));
console.log(secondCase(second));


}
destroyer([1, 2, 3], [5, 2, 1, 4]); //should return [3, 4, 5].;