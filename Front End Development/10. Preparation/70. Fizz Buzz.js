// Write a program that outputs the string representation of numbers from 1 to n.
//
// But for multiples of three it should output “Fizz” instead of the number
// and for the multiples of five output “Buzz”.
//
// For numbers which are multiples of both three and five output “FizzBuzz”.

let fizzBuzz = function (n) {
  let counter = 1;
  let results = [];

  while (counter <= n) {
    let str = '';
    if (counter % 3 === 0) str = 'Fizz';
    if (counter % 5 === 0) str += 'Buzz';
    if (!str) str += counter;
    results.push(str);
    counter++;
  }
  return results;
};

fizzBuzz(15);

// n = 15,
// Return:
// [
//     '1',
//     '2',
//     'Fizz',
//     '4',
//     'Buzz',
//     'Fizz',
//     '7',
//     '8',
//     'Fizz',
//     'Buzz',
//     '11',
//     'Fizz',
//     '13',
//     '14',
//     'FizzBuzz'
// ];
