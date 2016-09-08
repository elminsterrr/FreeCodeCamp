
function convertHTML(str) {
  var target;
  var decoder = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt',
    '\"': '&quot;',
    '\'': '&apos;'
  };
  var afterSplit = str.split('');
  
  function controlFreak(input) {
    console.log(input);
  }
  
  var control = afterSplit.forEach(controlFreak);
  /*
  var mapa = Object.keys(decoder);
  console.log('Mapa:', mapa);
  console.log('decoder[mapa[0]:', decoder[mapa[0]]);
    
  for (var i = 0; i < mapa.length; i++) {
    target = str.replace(mapa[0], decoder[mapa[0]]);  
  }
  */
  return target;
}

convertHTML("Dolce & Gabbana");