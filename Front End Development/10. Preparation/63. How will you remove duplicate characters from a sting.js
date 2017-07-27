// How will you remove duplicate characters from a sting?

function removeDuplicateChar (str) {
  let collectionObj = {};
  let result = [];

  str
    .split('')
    .map(function (element) {
      if (collectionObj[element]) collectionObj[element]++;
      else collectionObj[element] = 1;
    });

  for (let prop in collectionObj) {
    if (collectionObj[prop] === 1) result.push(prop);
  }

  return result.join('');
}

removeDuplicateChar('Learn more javascript dude'); // "Lnmojvsciptu";
