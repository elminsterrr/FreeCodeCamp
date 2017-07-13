// Array
const lody = [
  "vanilla",
  "chocolate",
  "strawberry"
];

lody.sklep = "Magnolia";

for (let prop in lody) {
  console.log(prop, ': ', lody[prop] );
}

// 0 :  vanilla
// 1 :  chocolate
// 2 :  strawberry
// sklep :  Magnolia