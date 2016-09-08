function convertHTML(str) {
  var target;
  var afterSplit = str.split('');
  
  function controlFreak(input) {
    console.log(input);
    var decoder = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt',
    '\"': '&quot;',
    '\'': '&apos;'
    };

    var mapa = Object.keys(decoder);
    console.log('Mapa:', mapa);
    console.log('decoder[mapa[0]]:', decoder['&']);
    
    function anotherFunction(anotherInput) {
      console.log('anotherInput:', anotherInput);
      if(input === anotherInput) {
        console.log('MATCH DATA FOUND!!!!!!!!!-----------');
      }
    }
    var testing = mapa.forEach(anotherFunction);
  }
  
  var control = afterSplit.forEach(controlFreak);
  return target;
}

convertHTML("Dolce & Gabbana");