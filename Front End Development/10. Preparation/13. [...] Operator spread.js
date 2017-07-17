// Operator "spread" umożliwia rozbicie danego wyrażenia na elementy (podczas przypisania).
// Operator "spread" może też być z powodzeniem stosowany, na przykład, do budowania nowych array:
let arrayOne = [1, 2, 3];
let secondArrayOne = [10, 11, ...arrayOne, 20];

console.log(secondArrayOne); // [10, 11, 1, 2, 3, 20]

// Na tej samej zasadzie łatwo go użyć do kopiowania tablic:
let arrayTwo = [1, 2, 3];
let secondArrayTwo = [ ...arrayTwo ];

console.log(secondArrayTwo); // [1, 2, 3]
