// http://www.pythontutor.com/javascript.html
//
// One of the simplest and most widely known ciphers is a Caesar cipher,
// also known as a shift cipher. In a shift cipher the meanings of the letters
// are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters
// are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character
// (i.e. spaces, punctuation), but do pass them on.

function rot13 (str) {
  let monaco = [];
  let luksemburg = [];
  let liechtenstein = [];
  let strSplit = str.split('');

  strSplit.forEach(function (e, index) {
    monaco.push(strSplit[index].charCodeAt(0));
  });

  monaco.forEach(function (e, index) {
    if (monaco[index] >= 65 && monaco[index] <= 90) {
      if (monaco[index] < 78) {
        luksemburg.push(String.fromCharCode(monaco[index] + 13));
      } else {
        luksemburg.push(String.fromCharCode(monaco[index] - 13));
      }
    } else {
      luksemburg.push(String.fromCharCode(monaco[index]));
    }
  });

  luksemburg.forEach(function (e, index) {
    liechtenstein += luksemburg[index];
  });

  return liechtenstein;
}

rot13('SERR PBQR PNZC'); // should decode to 'FREE CODE CAMP'
// rot13('SERR CVMMN!'); // should decode to 'FREE PIZZA!'
// rot13('SERR YBIR?'); // should decode to 'FREE LOVE?'
// rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.'); // should decode to 'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.'
