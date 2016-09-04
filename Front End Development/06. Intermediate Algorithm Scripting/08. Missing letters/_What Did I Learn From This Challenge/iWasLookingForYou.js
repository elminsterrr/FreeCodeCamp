var numArray = [ 61, 62, 63, 65];  //64

for(var k = 1; k < numArray.length; k++) {
  if(numArray[k] - numArray[k-1] != 1) {
    var roznica = numArray[k] - numArray[k-1];
    console.log('roznica: ', roznica);
    console.log('numArray[k]:', numArray[k]);
    console.log('numArray[k-1]]:', numArray[k-1]);
    var iWasLookingForYou = numArray[k] - 1;
    console.log('iWasLookingForYou: ', iWasLookingForYou);

    //Not consecutive sequence, here you can break or do whatever you want

    }
}
