function balanced(str) {
  return !str
    .split('')
    .reduce(function(prev, char) {
      if (prev < 0) return prev;
      if (char === '(') return ++prev;
      if (char === ')') return --prev;
      return prev;
    }, 0);
}

// balanced('()'); // true
// balanced(')('); // false
// balanced('(((('); // false
balanced('(()'); // false
