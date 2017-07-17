// Array
const cookies = [
  'vanilla',
  'chocolate',
  'strawberry'
];

cookies.shop = 'Magnolia';

// OK
for (let prop in cookies) {
  console.log(prop, ': ', cookies[prop]);
}
// 0 :  vanilla
// 1 :  chocolate
// 2 :  strawberry
// sklep :  Magnolia

// BETTER
for (let prop of cookies) {
  console.log(prop);
}
// vanilla
// chocolate
// strawberry
