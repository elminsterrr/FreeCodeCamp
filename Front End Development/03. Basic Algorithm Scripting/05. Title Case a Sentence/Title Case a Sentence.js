/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {

  var maleLitery = str.toLowerCase();
 //console.log(typeof(maleLitery));
 // console.log(maleLitery);
  var splitted = maleLitery.split(" ");
  //console.log(splitted);

var newArray = []; 
var splittedA = "";
while (splitted.length > 0) {
	var i = i + 1;
	console.log(splitted.length);
	
var a = splitted.shift();
//console.log(a);

splittedA = a.split("");
//console.log("I@" + splittedA);
var b = splittedA.splice(0,1);
var c = b[0].toUpperCase();

//console.log("II@" + b);
//console.log("III@" + splittedA);	
//console.log("IV@" + c);

//console.log("II@" + typeof(b)); ARRAY
//console.log("III@" + typeof(splittedA)); ARRAY
//console.log("IV@" + typeof(c)); STRING
// IV + III
var z = c + splittedA;
console.log("Z: " + z);
console.log("Z type: " + typeof(z));
newArray.push(z);
}

var koniec ="";
for (var t=0; t<newArray.length; t++) {
	
	
	if (t === 0) {                                
  		  koniec = koniec + newArray[t];  
  		}
  		
  		if( t !== 0 ){
  		  koniec = koniec + " " + newArray[t]; 
  		}
	
}

var myString = koniec.replace(/,/g , "");
console.log("Result is: " + myString);
return myString;
}
  
titleCase("I'm a little tea pot");