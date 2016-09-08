
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
    console.log('decoder[mapa[0]:', decoder[mapa[0]]);
  }
  
  var control = afterSplit.forEach(controlFreak);
  /* 
  for (var i = 0; i < mapa.length; i++) {
    target = str.replace(mapa[0], decoder[mapa[0]]);	
  }
  */
  return target;
}

convertHTML("Dolce & Gabbana");