/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
 
  var monaco = [];
  var luksemburg = [];
  var liechtenstein = [];

  var strSplit = str.split("");                    //Dzieli podany string na poszczególne znaki.
  console.log(strSplit);                           //Wyświetla efekt podziału.

  for (var i = 0; i < strSplit.length; i++) {      //Przeszukuje podzieloną "strSplit" i odczytuje kod UTF-16 dla poszczególnych znaków, po czym tworzy z tych kodów array o nazwie "monaco". The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
    monaco.push(strSplit[i].charCodeAt(0));
  }
  console.log(monaco);                             //Wyswietla array "monaco".

  for (var j = 0; j < monaco.length; j++) {        //Przeszukuje array "monaco" i w zależnosci od wartosci kodu UTF-16 dla poszczególnych znaków program podejmuje decyzję w jaki sposób odkodować konkretny znak. Odkodowane zanki zbiera w array "luksemburg".
  	if (monaco[j] >= 65 && monaco[j] <= 90) {
  	
  	
  	  if (monaco[j] < 78) {
  		luksemburg.push(String.fromCharCode(monaco[j] + 13));
  	  } else {
  	      luksemburg.push(String.fromCharCode(monaco[j] - 13));
        }
  	} else {
  		luksemburg.push(String.fromCharCode(monaco[j]));
  	}
  }
  
  for (var z = 0; z < luksemburg.length; z++) {    //Sumuje podzielone elementy z array "luksemburg" ponownie w jeden string "liechtenstein".
  	liechtenstein = liechtenstein + luksemburg[z];
  }
  return liechtenstein;                            //Zwraca odkodowany i połączony w całość string.
}

rot13("SERR PBQR PNZC");