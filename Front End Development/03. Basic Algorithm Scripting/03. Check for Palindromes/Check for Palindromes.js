var szeregPoMalLitBezSpac = [];
var stringPolaczony = "";

function cleaner(str) {                                        //Funkcja, która ma za zadanie wyszukać wszystkie znaki, które nie są alfanumeryczne z podanego Stringu i je usunąć, zwracając String bez nich.
var clean = str.replace(/[\W_]+/g, "");                        //Metoda replace(), zamienia z podanego str wszystko co jest argumentem a na argument b.
/*

We can use special selectors in Regular Expressions to select a particular type of value.
One such selector is the digit selector \d which is used to retrieve one digit (e.g. numbers 0 to 9) in a string.
In JavaScript, it is used like this: /\d/g.
Appending a plus sign (+) after the selector, e.g./\d+/g, allows this regular expression to match one or more digits.
The trailing g is short for 'global', which allows this regular expression to find all matches rather than stop at the firstatch.

The \w metacharacter is used to find a word character.
A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.

/ is the start of the regular expression.
  here is the pattern we want to match.
/ is the end of the regular expression.

+ @Appending a plus sign (+) after the selector, e.g./\d+/g, allows this regular expression to match one or more digits.
g @The trailing g is short for 'global', which allows this regular expression to find all matches rather than stop at the first match.

\W @zaznaczy wszystko co NIE JEST [a-z, A-Z, 0-9, including the _], wszystko co nie jest ponieważ jest użyty jako duża litera, jakbyśmy użyli w to zaznaczyłby wszystko co jest [a-z, A-Z, 0-9, including the _].

_ the literal character _ @zaznaczy też "_", ponieważ w poprzedniej komendzie miał zaznaczyć wszystko co nie jest [a-z, A-Z, 0-9, including the _]

so this regex will keep in your string only letters and numbers

Wszystko powyższe zostanie zamienione na "" czyli nic.

*/
var toLowerCase = clean.toLowerCase();                        // Bierze zmienną clean i zmienia wszystko co w niej zostało na małe litery.                               
var expression = /\S+/g;                                      // Wyrażenie, które ma za zadanie zaznaczyć wszystko co nie jest whitespace.       
szeregPoMalLitBezSpac = toLowerCase.match(expression);        // Zaznacza wszystko co nie jest whitespace i robi z tego Array. The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
stringPolaczony = szeregPoMalLitBezSpac.join("");             // Ma połaczyć Array z poprzedniej komendy w String, który bedzie przedzielony niczym "", zmiast przecinka. The join() method joins the elements of an array into a string, and returns the string. The elements will be separated by a specified separator. The default separator is comma (,).
  console.log("cleaner w dzialaniu...");
  return stringPolaczony;                                     // Zwraca efekt działania funkcji cleaner.                               
}
                                                                  
var strSplit = [];
var strJoin = "";

function reverseString(str) {                                 //Funkcja, która ma za zadanie odwrócić String podany na wejściu.
strSplit = str.split("");                                     //Metoda dzieli String na poszczególne znaki. The split() method is used to split a string into an array of substrings, and returns the new array. Tip: If an empty string ("") is used as the separator, the string is split between each character.
strReverse = strSplit.reverse();                              //Metoda odwraca kolejność elementów w Array. The reverse() method reverses the order of the elements in an array.
strJoin = strReverse.join("");                                // Ma połaczyć Array z poprzedniej komendy w String, który bedzie przedzielony niczym "", zmiast przecinka. The join() method joins the elements of an array into a string, and returns the string. The elements will be separated by a specified separator. The default separator is comma (,).
 console.log("reverseString w dzialaniu...");
 return strJoin;                                              // Zwraca efekt działania funkcji reverseString.  
}

function palindrome(x) {                                      //Funkcja, która ma za zadanie porównać czy dane wejściowe po funkcji cleaner są równe tym po zastosowaniu kombinacji funkcji cleaner(reverseString(x)). Jeśli tak funkcja zwraca "true", jeśli nie funkcja zwraca "false".
	console.log("@@@@@" + cleaner(x) + "#" + cleaner(reverseString(x)) + "@@@@@"); 
	
	if(cleaner(x) === cleaner(reverseString(x))) {
		return true;
	} else {
	    return false;
	}
}
//Testing
palindrome("Race Car");
//palindrome("0_0 (: /-\ :) 0-0");
//palindrome("My age is 0, 0 si ega ym.");
//palindrome("A man, a plan, a canal. Panama");