function whatIsInAName (collection, source) {

for (var name in collection) {
  if (collection.hasOwnProperty(name)) {
    
    console.log('name: ', name);
    console.log('VALUE: ^collection[name]^ ', collection[name]);
  }
  else {
    alert('#Error#'); // toString or something else
  }
}

}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

//should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]

//COLLECTION: [{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }] ARRAY
//source:      { "a": 1, "b": 2 } ARRAY

//should return arr = [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]