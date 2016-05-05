/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWord(str) {      //Funkcja przeszukuje podane zdanie w celu znalezienia najdłuższego słowa i podaje jego długość.
  var podzString = str.split(" ");   //Dzieli string na poszczególne słowa.
  
  var fruits = [];                   //Tworzy zmienną fruits poza pętlą for.
  for(i=0; i<podzString.length; i++){
    var temp = podzString[i].length; //Tworzy zmienną "temp", która zbiera długości poszczególnych słów w każdej iteracji.
    fruits.push(temp);               //Długości każdego słowa są magazynowane w array "fruits".
  }

  console.log("Before sorting: " + fruits);
  var posortowane = fruits.sort(function(a, b){return a-b});//Sortuje array "fruits" od najniższej do najwyższej wartości i przypisuje ją do zmiennej "posortowane". Użyłem compare function, ponieważ zwykłe sort nie działało dając efekt w postaci: [ 1, 10, 19, 2, 2, 2, 3, 4, 4, 4 ].
  console.log("After sorting: " + posortowane);
/*
compareFunction
Optional. A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:

function(a, b){return a-b}

When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

Example:

When comparing 40 and 100, the sort() method calls the compare function(40,100).

The function calculates 40-100, and returns -60 (a negative value).

The sort function will sort 40 as a value lower than 100.
*/

  var najwyzsza = posortowane.pop();     //Ucina z array "posortowane" ostatnią pozycję, czyli w tym przypadku najwyższą wartość.
  console.log("Longest word has " + najwyzsza + " letters!");
    return najwyzsza;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");