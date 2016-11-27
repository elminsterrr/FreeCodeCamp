/*
Working example: ...

Instructions:
Return the number of total permutations of the provided string
that don't have repeated consecutive letters. Assume that all 
characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations
(aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't
have the same letter (in this case a) repeating.
*/

/*
      let cur; 
      memo = memo || [];

It declares cur and memo, and it initializes memo to be the value
of memo, unless it is falsey (including undefined), in which case
it will be an empty array. In other words, it's a less than ideal
way to provide the function parameter with a default value.
*/

function permAlone(input) {
  let found = [];
  function permAloneOld(str) {
    let afterSplit = str.split('');
    function permutator(inputArr) {
      let results = [];
      function permute(arr, memo) {
        let cur; 
        memo = memo || [];
        for (let i = 0; i < arr.length; i++) {
          cur = arr.splice(i, 1);
          if (arr.length === 0) {
            results.push(memo.concat(cur));
          }
          permute(arr.slice(), memo.concat(cur));
          arr.splice(i, 0, cur[0]);
        }
        return results;
      }
      return permute(inputArr);
    }
    return permutator(afterSplit);
  }
  permAloneOld(input).map(function(oneReadyEl) {
    let letsCheckIt = 0;
    console.log(oneReadyEl);
    for (let i = 0; i<oneReadyEl.length; i++) {
      console.log(oneReadyEl[i]);
      if(oneReadyEl[i] === oneReadyEl[i -1]) {
        console.log('LEAVE IT!');
        return i++;
      }
    }
    console.log(letsCheckIt);
    found.push(oneReadyEl);
  });
  return found.length;
}

permAlone("aab"); //should return a number.
//permAlone("aab"); //should return 2.
//permAlone("aaa"); //should return 0.
//permAlone("aabb"); //should return 8.
//permAlone("abcdefa"); //should return 3600.
//permAlone("abfdefa"); //should return 2640.
//permAlone("zzzzzzzz"); //should return 0.
//permAlone("a"); //should return 1.
//permAlone("aaab"); //should return 0.
//permAlone("aaabb"); //should return 12.