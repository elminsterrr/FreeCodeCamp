// Check if a string (first argument, str) ends with
// the given target string (second argument, target).
//
// This challenge can be solved with the .endsWith() method,
// which was introduced in ES2015.
//
// But for the purpose of this challenge, we would like you to use one of the JavaScript
// substring methods instead.

function confirmEnding (str, target) {
  const lastWorld = str.split(' ').pop();
  const lengthOfTarget = target.length;
  const lengthOfLastWorld = lastWorld.length;

  const myGoal = lastWorld.substr(lengthOfLastWorld - lengthOfTarget, lengthOfTarget);

  if (myGoal === target) return true;

  return false;
}

confirmEnding('He has to give me a new name', 'name');
