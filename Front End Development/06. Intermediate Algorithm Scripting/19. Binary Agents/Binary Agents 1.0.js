/*
Working example: https://repl.it/Dkce/2

Instructions: 
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/
function binaryAgent(str) {
  var afterSplit = str.split(' ');
  var result = afterSplit.map(function(eachInput) {
    return String.fromCharCode(decoder(eachInput));
  });
  return result.join('');
}
function decoder(input) {
  return parseInt(input, 2);
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");