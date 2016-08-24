
/*Instructions:
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog",
it should be replaced as "Dog".

*/

'use strict';

function myReplace(str, before, after) {
  
  
  var res = str.split(' ');
  
  riseAndFight(res, before, after);
  
  function riseAndFight() {
    for (var i = 0; i<res.length; i++) {
      console.log(res[i]);
      if (before === res[i]) {
        console.log("HIT!");
        res[i] = after;
      }
    }
  }
  
  console.log(res);
  
  var done = res.join(' ');
  return done;
}

myReplace("Let us go to the store", "store", "mall") 

//should return "Let us go to the mall".

/*
  var n = res.search(before);
  
  //str.splice(n, 1);

  console.log(n);
*/
