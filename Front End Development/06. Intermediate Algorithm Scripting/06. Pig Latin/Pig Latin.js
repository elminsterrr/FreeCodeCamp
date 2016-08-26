/* 
Working example: http://repl.it/CrFE/0
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/


function translatePigLatin(str) {
  var letters = str.split('');     //Break orginal string.
  var vovelRegex =/[aeiou]/;       //Regex for strings that contain 'aeiou'.

  if(vovelRegex.test(letters[0])) {  //Test the first character of the array.
    return letters.join('') + 'way'; //Upon matching adds way to the end of the string.
  }
  
  while(true){                           //For cases not matching vowels.
    if(!vovelRegex.test(letters[0])) {   //If regex doesn't contain a vowel at first char.
      letters.push(letters.splice(0,1)); //Push it to the end and splice the first letter.
    } else {
      break;                             //Breaks upon finding a vowel.
    }

    str = letters.join('') + 'ay';       //Adds ay to the end and joins string back together.
  }

  return str;
}

translatePigLatin("consonant");