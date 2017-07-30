// Given an array of integers, every element appears twice except for one. Find that single one.

let singleNumber = function (nums) {
  let collection = {};
  let target = [];
  nums.map(function (element) {
    if (collection[element]) collection[element]++;
    else collection[element] = 1;
  });
  for (let prop in collection) {
    if (collection[prop] === 1) target.push(prop);
  }
  return Number(target);
};

singleNumber([1, 1, 2, 2, 3, 4, 4, 5, 5]); // 3
