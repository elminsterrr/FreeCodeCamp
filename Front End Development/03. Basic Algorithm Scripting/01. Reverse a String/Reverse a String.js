var strSplit = "";

function reverseString(str) {
strSplit = str.split("");
strReverse = strSplit.reverse();
strJoin = strReverse.join("");
  return strJoin;
}

var zmiana ="";

zmiana = reverseString("hello");

console.log(typeof(zmiana));
console.log(zmiana);