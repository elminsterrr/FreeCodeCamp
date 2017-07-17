// Metoda "map" obiektu Array jest funkcją wyższego rzędu
// (funkcją przyjmującą inną funkcje jako parametr).
// Tworzy ona nową tablicę na podstawie wyników zwracanych przez
// funkcję wywołaną na rzecz każdego z elementów tablicy.

let oldArray = [1, 2, 3];
let newArray = oldArray.map(element => element * 2);

console.log(oldArray); // [1, 2, 3] bez zmian
console.log(newArray); // [2, 4, 6]
