// Tworzy	ona	nową	tablicę	wywołując	przekazaną	do	niej	funkcję
// na	rzecz	każdego	z	elementów	tablicy	bazowej.

// Jeśli	funkcja	zwraca	true,	dany	element	trafia
// do	wynikowej	tablicy.	W	przeciwnym wypadku	jest	on	pomijany.

const tablica = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = tablica.filter(element => element < 5);

console.log(tablica);  // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(newArray); // [ 0, 1, 2, 3, 4 ]
