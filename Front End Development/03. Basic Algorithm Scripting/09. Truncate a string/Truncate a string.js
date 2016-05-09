/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). !!!
Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

!!!However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function truncateString(str, num) {

var ciach =""; 
var pach ="";
  if (str.length > num) {           //Funkja przycina string tylko gdy długość stringu jest większa od zadanej przez użytkownika wartości "num".
    if(num <= 3){                   //Jeśli użytkownik chce mieć "num" mniejsze lub równe 3 to wtedy kropki nie liczą się do zadanej długości skrótu.
      ciach = str.slice(0,num);     //Ucina od początku stringu do pozycji zadanej przez uzytkownika.
      pach = ciach + "...";         //Dodaje kropki.
      console.log(pach);
    } else {
        ciach = str.slice(0,num-3); //Ucina o 3 pozycje więcej niż podał uzytkownik jako "num", żeby zrobić trzy miejsca na kropki.
        pach = ciach + "...";       //Dodaje kropki.
        console.log(pach);
      }
    return pach;                    //Zwraca skróconą wersję.
	} else {
        return str;                 //Zwraca niezmienioną wersję.
	}
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);