/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

/*
Syntax: array.filter(callbackFunction[,thisArg])


callbackFunction - Required. Function that gets called for each element of the array. If the function returns true,
the element is kept otherwise filtered.

thisArg - Optional. An object to which the this keyword can refer in the callbackfn function.

The filter method calls the callbackFunction one time for each element in the array. If the callbackFunction returns false for all elements of the array, the length of the new array that will be returned is 0.

CallbackFunction Syntax:
value - The value of the element in the array
index - The index position of the element in the array
array - The source array object that contains the element
*/

function bouncer(a){
  function czyToPrawda(val) {                 //Funkcja "czyToPrawda" sprawdza czy podstawiona wartość "val" (czyli każdy kolejny element array "a") spełnia warunek  Boolean(val). Jeśli spełnia funkcja "czyToPrawda" zwróci wartość true. 
    console.log(Boolean(val));
    return Boolean(val);
  }
  var filtrujemy = a.filter(czyToPrawda);	  //Podstawowa metoda filtrowania. Pobiera array "a" i filtruje każdy jej element po kolei używając do tego callback funkcji "czyToPrawda".
  console.log(filtrujemy);
  return filtrujemy;                          //Jeśli funkcja "czyToPrawda" zwróci wartość true to funkcja filter zaliczy ją w poczet nowo tworzonej array "filtrujemy". Na koniec funkcja ma zwracać nowo utworzoną array "filtrujemy".
}
bouncer([7, "ate", "", false, 9]);