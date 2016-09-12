/*
Working example: https://repl.it/DYdT

Instructions: Convert the characters:

&, <, >, " (double quote), and ' (apostrophe)

in a string to their corresponding HTML entities.
*/

'use strict';
function convertHTML(str) {
  var afterSplit = str.split('');
  function controlFreak(input) {
    //console.log(input); //all elements separated
    var decoder = {       //object with decoded values, '&' this is "key", '&amp;' this is value 
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
    };
    var mapa = Object.keys(decoder);              //array with all object decoder "keys"
    //console.log('Mapa:', mapa);                 //array with all object decoder "keys"
    //console.log('decoder['&']:', decoder['&']); //value for first decoder "key", it is the same as decoder[mapa[0]]
    function magicBeginsFromHere (magicInput) {
      //console.log('magicInput:', magicInput);   //all object decoder "keys" separately
      if(input === magicInput) {
        //console.log('MATCH DATA FOUND!!!!!!!!!');
        //console.log('@', afterSplit.indexOf(magicInput));
        var findMePlease = afterSplit[afterSplit.indexOf(magicInput)];      // afterSplit[6] (is '&' in first example) ---(assign)> findMePlease ---(so we get)> findMePlease = '&';
        afterSplit[afterSplit.indexOf(magicInput)] = decoder[findMePlease]; // [decoder['&'] in another words value: '&amp;'] ---(assign)> afterSplit[6] ---(so we get)> 'Dolce &amp; Gabbana'
      }
    }
    mapa.forEach(magicBeginsFromHere); //for each element in mapa array I start magicBeginsFromHere function
  }
  afterSplit.forEach(controlFreak);    //for each element in afterSplit array I start controlFreak function
  return afterSplit.join('');
}

convertHTML("Dolce & Gabbana"); //should return Dolce &​amp; Gabbana.
//convertHTML("Hamburgers < Pizza < Tacos"); //should return Hamburgers &​lt; Pizza &​lt; Tacos.
//convertHTML("Sixty > twelve"); //should return Sixty &​gt; twelve.
//convertHTML('Stuff in "quotation marks"'); //should return Stuff in &​quot;quotation marks&​quot;.
//convertHTML("Shindler's List"); //should return Shindler&​apos;s List.
//convertHTML("<>"); //should return &​lt;&​gt;.
//convertHTML("abc"); //should return abc. 