// How do get nth Fibonacci number?

function fibo (n) {
  if (n <= 1) {
    return n;
  } else {
    return (fibo(n - 1) + fibo(n - 2));
  }
}

fibo(20); // 6765
