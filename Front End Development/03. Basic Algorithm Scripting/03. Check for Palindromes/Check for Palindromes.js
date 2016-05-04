var szeregPoMalLitBezSpac = [];
var szeregPoMalLitBezSpacGotowy = [];

function cleaner(str) {
var clean = str.replace(/[\W_]+/g, " ");                             
var toLowerCase = clean.toLowerCase();                             
var expression = /\S+/g;                                          
szeregPoMalLitBezSpac = toLowerCase.match(expression);           
szeregPoMalLitBezSpacGotowy = szeregPoMalLitBezSpac.join("");
  console.log("cleaner w dzialaniu...");
  return szeregPoMalLitBezSpacGotowy;
}
                                                                  
var strSplit = "";
var strJoin = "";

function reverseString(str) {
strSplit = str.split("");
strReverse = strSplit.reverse();
strJoin = strReverse.join("");
 console.log("reverseString w dzialaniu...");
 return strJoin;
}

function palindrome(x) {
	console.log(cleaner(x) + "#" + cleaner(reverseString(x)));
	
	if(cleaner(x) === cleaner(reverseString(x))) {
		return true;
	} else {
	    return false;
	}
}

palindrome("Race Car");