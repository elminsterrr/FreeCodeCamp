const oldArray = [1, 2, 3];
const concatMe = [4, 5, 6];

const newArray = oldArray.concat(concatMe); // [ 1, 2, 3, 4, 5, 6 ]
console.log(newArray);

const betterArray = [...oldArray, ...concatMe];
console.log(betterArray); // [ 1, 2, 3, 4, 5, 6 ]
