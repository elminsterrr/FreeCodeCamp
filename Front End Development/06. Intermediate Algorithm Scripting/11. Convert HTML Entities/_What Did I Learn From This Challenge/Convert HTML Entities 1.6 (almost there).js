function convertHTML(str) {
  var afterSplit = str.split('');
  function controlFreak(input) {
    //console.log(input);
    var decoder = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt',
    '\"': '&quot;',
    '\'': '&apos;'
    };
    var mapa = Object.keys(decoder);
    //console.log('Mapa:', mapa);
    //console.log('decoder[mapa[0]]:', decoder['&']);
    function anotherFunction(anotherInput) {
      //console.log('anotherInput:', anotherInput);
      if(input === anotherInput) {
        //console.log('MATCH DATA FOUND!!!!!!!!!-----------');
        //console.log('@', afterSplit.indexOf(anotherInput));
        var findMePlease = afterSplit[afterSplit.indexOf(anotherInput)];
        afterSplit[afterSplit.indexOf(anotherInput)] = decoder[findMePlease];
      }
    }
    var testing = mapa.forEach(anotherFunction); // for each element in mapa array I start anotherFunction function
  }
  var control = afterSplit.forEach(controlFreak); // for each element in afterSplit array I start controlFreak function
  return afterSplit.join('');
}

convertHTML("Dolce & Gabbana");