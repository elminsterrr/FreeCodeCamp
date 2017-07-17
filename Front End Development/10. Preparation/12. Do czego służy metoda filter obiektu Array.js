const oldArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = oldArray.filter(element => element < 5);

console.log(oldArray);  // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(newArray); // [ 0, 1, 2, 3, 4 ]
