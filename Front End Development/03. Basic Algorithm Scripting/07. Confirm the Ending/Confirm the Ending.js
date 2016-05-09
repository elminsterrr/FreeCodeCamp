/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/
function confirmEnding(str, target) {

var targetLengthCounter = target.length;              //Liczy długość strungu podanego przez użytkownika.
var researcher = str.substr(-targetLengthCounter);    //Wydobywa ze string nowy string o długości równej długości stringu podanego przez użytkowanika jako "target". Minus sprawia że wydobywa długość podanego stringu licząc od końca.
console.log("#" + researcher + ":" + target + "#");

return researcher === target;                         //Zwraca wartość funkcji jako true jeśli równanie jest prawdziwe oraz false jeśli jest fałszywe.
}
confirmEnding("He has to give me a new name", "name");