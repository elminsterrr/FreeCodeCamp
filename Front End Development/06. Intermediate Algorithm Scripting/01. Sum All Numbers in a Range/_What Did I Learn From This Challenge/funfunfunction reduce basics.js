var orders = [
{ amount: 250 },
{ amount: 400 },
{ amount: 100 },
{ amount: 325 },
];


var totalAmount = orders.reduce(function(sum, zamowienie) {
  console.log("hello, sum:", sum, zamowienie);
  return sum + zamowienie.amount;	
}, 0);                                                    // Zero is starting point for our function.

console.log("WYNIK: " + totalAmount);