function spinalCase(str) {
  
  var specialTheory = special(str);
  function special(input) {
    
  var test = str.split(/(?=[A-Z])/);
  return test;
  }
  
  console.log(specialTheory);
  
  var pattern1 = /\s/g;
  
  var toLowerCase = str.toLowerCase();
  
  var newstr = toLowerCase.replace(pattern1, '-');
  
  var pattern2 = /\_/g;
  
  var nexT = newstr.replace(pattern2, '-');
  
  
  return nexT;
}

spinalCase("AllThe-small Things");
// should return "the-andy-griffith-show".