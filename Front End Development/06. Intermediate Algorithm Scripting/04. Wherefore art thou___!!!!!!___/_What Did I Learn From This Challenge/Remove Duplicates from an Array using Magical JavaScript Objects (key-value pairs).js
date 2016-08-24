windows.onload = function() {
  var dupArray = ['John', 'Rose', 'Aaron', 'Sarah', 'Rose', 'Kevin', 'Sarah'];
  var finalArray = removeDuplicates(dupArray);
  for(var k = 0; k<finalArray.length, k++)
  alert

  function removeDuplicates(x) {
    var tempObj = {};
    var j = 1;
    for(var i = 0; x.length; i++) {
      tempObj[x[i]] = j;
      j++;
    }
    var final = [];
    for(var key in tempObj)
    final.push(key);
    return final;
  }
}
