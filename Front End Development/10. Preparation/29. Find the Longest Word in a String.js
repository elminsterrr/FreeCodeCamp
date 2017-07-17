function findLongestWord(str) {
  const wordArray = str.split(' ');
  const lengthArray = wordArray.map(el => el.length);
  const highest = lengthArray.sort(function(a, b) {
    return a- b;
  }).pop();
  return highest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
