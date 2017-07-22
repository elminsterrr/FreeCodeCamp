function removeDuplicateChar (str) {
  let matrix = {};
  let results = [];
  let strSplit = str.split('');

  strSplit.map(function (el) {
    if (matrix[el]) {
      matrix[el] += 1;
    } else {
      matrix[el] = 1;
    }
  });

  for (let prop in matrix) {
    if (matrix[prop] === 1) {
      results.push(prop);
    }
  }
  return results.join('');
}

removeDuplicateChar('Learn more javascript dude'); // "Lnmojvsciptu"
