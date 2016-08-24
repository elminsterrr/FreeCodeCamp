function titleCaseTest(data) {
  var splitted = data.split('');  
  //console.log(splitted);
  if (splitted[0] === splitted[0].toLowerCase()) {
  	console.log('Use small first leter!');
  	return splitted.join('');
  } else {
  	console.log('Use Great first leter!');
  	var upper = splitted[0].toUpperCase();
  	//console.log(upper);
  	var bePrepered = splitted.slice(1);
  	//console.log(bePrepered);
  	bePrepered.unshift(upper);
  	//console.log(bePrepered);
  	var completed = bePrepered.join('');
   	return completed;
  }
}

titleCaseTest('Store');