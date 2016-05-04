function factorialize(num) {              //Funkcja, która wylicza silnię z podanego argumentu.
  if ( num === 0 ) {                      //Jeśli argument wprowadzony w miejsce parametru "num" będzie równy "0" to zwróć 1. Tym samym kończy działanie funkcji i pętlę.
  	return 1;
  }
  return num * factorialize(num - 1);     //W każdym innym przypadku wylicz silnię poprzez odwołanie wewnątrz funkcji do tej samej funkcji.  "Recursion" is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. 
}

console.log(factorialize(5));             //Drukuje w konsoli efekt działania funkcji "factorialize" z argumentem "5".