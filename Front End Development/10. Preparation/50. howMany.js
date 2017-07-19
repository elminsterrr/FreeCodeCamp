function howMany (str, char) {
  const strSplit = str.split('');
  const results = strSplit.filter(function (element) {
    return element === char;
  });
  return results.length;
}

howMany('testing string', 't'); // should return 3
