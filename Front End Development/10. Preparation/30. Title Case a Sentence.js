// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

function titleCase(str) {
  const a = str.split(' ');

  const b = a.map(function(e) {
    return e.split('')[0].toUpperCase() + (e.slice(1, e.length).toLowerCase());
  });

  return b.join(' ');
}

titleCase("I'm a little tea pot");
