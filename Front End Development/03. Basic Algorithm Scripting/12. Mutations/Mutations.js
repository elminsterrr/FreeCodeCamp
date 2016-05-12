/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  var toLowerCase = [];                        //Deklarujemy pustą array.
  for (var j = 0; j<arr.length; j++) {         
  	toLowerCase.push(arr[j].toLowerCase());    //Przekształcamy "arr" w nową array "toLowerCase", gdzie każdy string będzie pisany małymi literami.
  	console.log(toLowerCase);                  //Wyświetla nową array "toLowerCase" w trakcie jej tworzenia.
  }

  var newArr = toLowerCase[1].split("");       //Deklaruje "newArr", która równa jest podzielonej na poszczególne znaki drugiej pozycji [1] z array "toLowerCase".
  for (var i = 0; i < newArr.length; i++) {    //Przeszukuje "newArr" litera po literze.
    
    console.log("Pierwsza podzielona: " + newArr);
    var n = toLowerCase[0].indexOf(newArr[i]); //Deklaruje zmienną n. Sprawdzamy wartość indexOf pierwszego elementu z małymi literami, czyli "toLowerCase[0]" dla poszczególnych elementów z "newArr". Jeśli element nie zostanie znaleziony zostanie zwrócona wartość n: -1.
    console.log("Litera: " + newArr[i]);
    console.log("IndexOf: " + n);
    
    if (n === -1) {
  	  return false;                            //Funkcja w przypadku n === -1 ma zwracać wartość false i kończyć swoje działanie, ponieważ wystarczy, żeby tylko jednej litery z elementu drugiego nie było w pierwszym, aby funkcja miała wykazywać wartość false. W każdym innym przypadku funkcja ma wykazywać wartość true.
    }
  }
  return true;
}

mutation(["hello", "hey"]);