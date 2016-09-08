
function convertHTML(str) {
  var target;
  var decoder = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt',
    '\"': '&quot;',
    '\'': '&apos;'
  };
  var mapa = Object.keys(decoder);
  console.log(mapa);
  console.log(decoder[mapa[0]]);
    for (var i = 0; i < mapa.length; i++) {
    target = str.replace(mapa[0], decoder[mapa[0]]);	
  }
  return target;
}

convertHTML("Dolce & Gabbana");