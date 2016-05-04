function reverseString(str) {              //Funkcja, która ma za zadanie odwrócić String podany na wejściu.
var strSplit = str.split("");              //Metoda dzieli String na poszczególne znaki. The split() method is used to split a string into an array of substrings, and returns the new array. Tip: If an empty string ("") is used as the separator, the string is split between each character.
var strReverse = strSplit.reverse();       //Metoda odwraca kolejność elementów w Array. The reverse() method reverses the order of the elements in an array.
var strJoin = strReverse.join("");         //Ma połaczyć Array z poprzedniej komendy w String, który bedzie przedzielony niczym "", zmiast przecinka. The join() method joins the elements of an array into a string, and returns the string. The elements will be separated by a specified separator. The default separator is comma (,).
  return strJoin;                          //Zwraca efekt działania funkcji reverseString. 
}

var zmiana = reverseString("hello");       //Zmienna "zmiana" odwołuje się do funkcji "reverseString" z argumentem ("hello").

console.log(typeof(zmiana));               //Pokazuje typ zmiennej "zmiana".
console.log(zmiana);                       //Wywołuje zmienną "zmiana" i drukuje w konsoli efekt jej działania. Zmienna zmiana to funkcja "reverseString" z argumentem ("hello").