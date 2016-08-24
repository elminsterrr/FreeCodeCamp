/*
Working example: http://repl.it/CqoN/0

Instructions:
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

  function titleCaseTest(dataBefore, dataAfter) {
    var splittedBefore = dataBefore.split(''); 
    var splittedAfter = dataAfter.split('');  
    console.log(splittedBefore);
    console.log(splittedAfter);
    if (splittedBefore[0] === splittedBefore[0].toLowerCase()) {  //Jeśli pierwsza litera równa jest pierwszej literze z 'before' po zmianie na małą, to zwracam niezmienione słowo i wiem, że bylo ono pisane z małej litery.
      console.log('Using Lower Case letter!');
      var ready = splittedAfter.join('');
      console.log(ready);
      return ready;
    } else {                                                      //Jeśli pierwsza litera nie jest równa pierwszej literze z 'before' po zmianie na małą, to podejmuję decyzję, że słowo z 'after' będzie zaczynało się z dużej litery i program rozpoczyna przekształcanie.
        console.log('Using Upper Case letter!');
        var upper = splittedAfter[0].toUpperCase();
        var bePrepered = splittedAfter.slice(1);
        console.log(bePrepered);
        bePrepered.unshift(upper);
        console.log(bePrepered);
        var completed = bePrepered.join('');
        console.log(completed);
        return completed;
    }
  }

  var res = str.split(' ');
  console.log('Input DATA: ', res);
  for (var i = 0; i<res.length; i++) {
    if (before === res[i]) {
      console.log('Caution! Match data found on iteration: ', i);
      console.log('I will start processing in...');
      console.log('3');
      console.log('2');
      console.log('1');
      console.log('Engage!');
      var testedAfter = titleCaseTest(before, after);
      res[i] = testedAfter;
      var resDone = res.join(' ');
      return resDone;
    }
  }
  return 'The program could not work properly. Sorry for the inconvenience!';
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
//should return "He is Sitting on the couch"