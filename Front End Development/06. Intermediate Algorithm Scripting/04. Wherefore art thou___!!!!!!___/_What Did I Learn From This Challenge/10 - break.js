/*
    For Loops
    Array.prototype.filter()
    Object.hasOwnProperty()

    Tworzy nową tablicę z wszystkimi elementami, które przechodzą poprawnie zrealizowany w postaci dostarczonej funkcji test.
Składnia


arr.filter(callback[, thisArg])

Przykład: Odfiltrowanie wszystkich małych wartości

Poniższy przykład używa filter by utworzyć przefiltrowaną tablicę, z której usunięto wszystkie elementy których wartość wynosi mniej niż 10.

function isBigEnough(element, index, array) {
  return (element >= 10);
}

filtered = [12, 5, 8, 130, 44].filter(isBigEnough);


*/


function whatIsInAName (collection, source) {

for (var name in collection) {
  if (collection.hasOwnProperty(name)) {
    
    console.log('name: ', name);
    console.log('VALUE: ^collection[name]^ ', collection[name]);
  }
  else {
    alert('#Error#'); // toString or something else
  }
}

console.log('source:', source);

}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

//should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]






//COLLECTION: [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }] ARRAY
//source:      { "a": 1, "b": 2 } ARRAY

//should return arr = [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]