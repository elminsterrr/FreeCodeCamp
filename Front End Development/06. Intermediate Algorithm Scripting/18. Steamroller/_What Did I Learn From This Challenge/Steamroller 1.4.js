function global(array) {
  var result = [];
  function steamrollArray(arr) {
    var x = arr.forEach(flattendArray);
    return x;
  }
  function flattendArray(input) {
    if(Array.isArray(input)) {
      var y = input.forEach(flattendArray);
    } else {
      result.push(input);
    }
  }
  steamrollArray(array);
}
global([1, [2], [3, [[4]]]]);