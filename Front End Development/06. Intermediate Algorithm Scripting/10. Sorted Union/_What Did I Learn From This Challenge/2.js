function uniteUnique(arr) {
  var i;
  var flattened;
  var clearDup;
  
  flattened = [arguments[0], arguments[1], arguments[2]].reduce(function(a, b) {
  	return a.concat(b);
  });
  
  clearDup = uniqFast(flattened);
  function uniqFast(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
      var item = a[i];
      if(seen[item] !== 1) {
        seen[item] = 1;
        out[j++] = item;
      }
    }
    return out;
  }
  return clearDup;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);