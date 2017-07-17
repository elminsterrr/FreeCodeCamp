function factorialize (num) {
  let goal = 1;
  for (let i = 1; i <= num; i++) {
    goal *= i;
  }
  return goal;
}

factorialize(5);
