// How would you compare two objects in JavaScript?

function compare (aObj, bObj) {
  let aProp = Object.getOwnPropertyNames(aObj);
  let bProp = Object.getOwnPropertyNames(bObj);

  if (aProp.length !== bProp.length) return false;

  for (let prop in aObj) {
    console.log(aObj[prop], '===', bObj[prop]);
    if (aObj[prop] !== bObj[prop]) return false;
  }
  return true;
}

let one = {
  name: 'Przemek',
  age: 17
};

let two = {
  name: 'Przemek',
  age: 5
};

compare(one, two); // false
