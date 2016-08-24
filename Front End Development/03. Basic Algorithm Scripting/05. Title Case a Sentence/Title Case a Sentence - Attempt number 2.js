/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
console.log(str);

var maleLitery = str.toLowerCase();    //Cały string "str" zostaje przerobiony na małe litery.
console.log(maleLitery);

var splitted = maleLitery.split(" ");  //String zostaje podzielony poprzez spację (" ") na poszczególne słowa, które trafiają do array.
console.log(splitted);
/*
FROM: http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
/*
The charAt() method returns the character at the specified index in a string.

The index of the first character is 0, the second character is 1, and so on.
---
The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Note: The original array will not be changed.
*/
var ooJa = [];
var ooJaHome = [];

for (var i=0; i<splitted.length; i++) {
	ooJa = capitalizeFirstLetter(splitted[i]); //Stosuje skonstruowaną powyżej funkcję do każdej pozycji w array przy użyciu pętli for.
	ooJaHome.push(ooJa);                       //Efekt działania funkcji zostaje zachowany w nowej array "ooJaHome".
	//console.log("&" + ooJaHome);             //Kontrola przebiegu procesu iteracji.
}

console.log("#" + ooJaHome);                   //Wyświetla zawartość "ooJaHome".

var koniec = "";
for (var j=0; j<ooJaHome.length; j++) {
  if(j===0) {                                  //Dla j===0, czyli pierwszego słowa w zdaniu nie dodajemy spacji przed.
    koniec = ooJaHome[j];
  } else {                                     //Dla każdego innego j (innego niż j===0) dodajemy spację przed dodaniem danego słowa. 
      koniec = koniec + " " + ooJaHome[j];
    }
}
return koniec;                                 //Zwraca zsumowane i porozdzielane spacjami wszystkie słowa w formie jednego stringu.
}

titleCase("I'm a little tea pot");