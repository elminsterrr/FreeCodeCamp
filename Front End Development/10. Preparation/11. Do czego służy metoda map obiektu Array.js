// Metoda "map" obiektu Array jest funkcją wyższego rzędu(funkcją przyjmującą inną funkcje jako parametr).

// Tworzy ona nową tablicę na podstawie wyników zwracanych przez funkcję wywołaną na rzecz każdego z elementów tablicy.

let tablica = [1, 2, 3];
let nowaTab = tablica.map(element => element * 2);

console.log(tablica); // [1, 2, 3] bez zmian 
console.log(nowaTab); // [2, 4, 6]