// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array
// that are of the same value as these arguments.

function destroyer (arr) {
  let target = [];
  let argsArray = Array.from(arguments); // zamaiana arguments w array
  let withoutFirstArg = argsArray.slice(1); // usunięcie tylko pierwszego elemetu z array

  // console.log(withoutFirstArg.indexOf(1))
  // Odwrocenie - podstawiam pojedynczo kolejne liczby z [1, 2, 3, 1, 2, 3]
  // i szukam takiej, która nie występuje w array [2, 3] /withoutFirstArg/.
  // Ta, która nie występuje da indexOf -1 więc filter zwróci dla niej wartosc true
  // zapisując zarazem ją w array target.

  target = arr.filter(function (element) {
    return withoutFirstArg.indexOf(element) === -1;
  });

  return target;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1]
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);  // should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
// destroyer([2, 3, 2, 3], 2, 3); // should return [].
// destroyer(['tree', 'hamburger', 53], 'tree', 53); // should return ['hamburger'].
