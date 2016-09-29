
//start-------------------------------------------
1 function sflatten(x, accu) {
2   var temp = accu || [];
3   for(var i = 0; i < x.length; i++){
4     if(x[i].constructor === Array) {
5       sflatten(x[i], temp)
6     } else {
7       temp.push(x[i]);
8     }
9   }
10    return temp;
11  }
12  
13  console.log(sflatten([1,[2], [3, [[4]]]]));

//steamrollArray([1, [2], [3, [[4]]]]);  //should return [1, 2, 3, 4].
//steamrollArray([[["a"]], [["b"]]]);  //should return ["a", "b"].
//steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
//steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4].
//end---------------------------------------------